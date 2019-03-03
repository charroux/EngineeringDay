/**
 * 
 */

Vue.config.devtools = true


Vue.component('assessment-result', {
	data: function () {
		 return {	 
			 teamAssessment : []
		 }
	  },
		methods: {
			onViewResult: function (event) {
				axios
					.get('https://engineeringday.appspot.com/teamAssessment')
					.then(response => (this.teamAssessment = response.data))
			 }
		},
	template: `
	<div>
	  <button v-on:click="onViewResult">View result</button>
	  <table>
	   <tr>
			<th>Team number</th>
			<th>mark</th>
			<th>details</th>
	   </tr>
	   <tr v-for="assessment in teamAssessment">
			<td>{{assessment.teamNumber}}</td>
			<td>{{assessment.mark}}</td>
	       	<td v-for="criteria in assessment.criteria">
	       		{{criteria.valueAsName}}
	       	</td>
	   </tr>
	 </table> 
	</div>
		`
})

	
new Vue({ el: '#components-assessment-result' })
