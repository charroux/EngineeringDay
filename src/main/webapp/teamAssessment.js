/**
 * 
 */

Vue.config.devtools = true


Vue.component('assessment', {
	data: function () {
		 return {	
			 teamNumber : 1, 
			 assessmentTable : [],
			 assess : [],
			 saveValidation : false,
			 teamReady : false,
			 erreur : false,
			 erreurMessage : ""
		 }
	  },
		methods: {
			onTeamNumber: function (event) {
				axios
					.get('https://engineeringday.appspot.com/assessmentTable')
					.then(response => {
						this.assessmentTable = response.data
						this.saveValidation = false
						this.teamReady = true
					})
					.catch(error => {						
	  					this.erreur = true;
	  					this.erreurMessage = error.response.statusText
					});
			 },
	  		onSaveAssessment: function (event) {
	  			axios.put('https://engineeringday.appspot.com/teamAssessment/' + this.teamNumber , this.assess)
	  			.catch(error => {
	  				this.erreur = true;
	  				this.erreurMessage = error.response.statusText
	  			});
	  			this.saveValidation = true
	  			this.teamReady = false
	  		},
	  		onCancelAssessment: function (event) {
		  		this.saveValidation = false
		  		this.teamReady = false
		  	},
		  	onErrorClosed: function (event) {
		  		this.erreur = false
		  	}			 
		},
	template: 		`
	<div>
	
		<div>
			<button v-if="erreur" type="button" class="btn btn-danger" v-on:click="onErrorClosed">Erreur : {{erreurMessage}}</button>
		</div>	
	
		<form>
		<div class="row">
			<div class="col">Choisir un numéro d'équipe : </div>
			<div class="col"><input v-model="teamNumber" size="4" pattern="[0-9]+"></div>
			<div class="col">
				<button v-if="teamReady == false" type="button" class="btn btn-info" v-on:click="onTeamNumber">Sélectionner l'équipe {{teamNumber}}</button>
				<label v-if="teamReady">Equipe {{teamNumber}} prête à la saisie</label>
			</div>
		</div>	
		</form>

		<table class="table table-sm">
		<tbody>
						
			<tr class="table-active" v-for="(assessment, index) in assessmentTable">
			<td><b>{{assessment.criterion}}</b></td>
	       	<td v-for="values in assessment.criterionValues">
	       		<input type="radio" :value="values" v-model="assess[index]">
	       		{{values.name}}
	       	</td>
			</tr>
			
		</tbody> 
		</table>
		
		<div class="row">
			<div class="col"><button type="button" class="btn btn-info" v-if="teamReady" v-on:click="onSaveAssessment">Enregistrer</button></div>
			<div class="col"><button type="button" class="btn btn-info" v-if="teamReady" v-on:click="onCancelAssessment">Annuler</button></div>
			<div class="col"><label v-if="saveValidation">Evaluation enregistrée !</label></div>
		</div>

	 </div>
		`
})

	
new Vue({ el: '#components-assessment' })
