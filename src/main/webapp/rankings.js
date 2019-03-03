/**
 * 
 */

Vue.config.devtools = true


Vue.component('rankings', {
	data: function () {
		 return {	
			 scores : []		 }
	  },
		methods: {
			onRankings: function (event) {
				axios
					.get('https://engineeringday.appspot.com/rankings')
					.then(response => (this.scores = response.data))
			 }
	  },
	template: `
	<div>
		<button type="button" class="btn btn-info" v-on:click="onRankings">View rankings</button>
		<table class="table table-sm">
		<tbody>
			<tr v-for="score in scores">
			<td><b>{{score.teamNumber}}</b></td>
			<td>{{score.mark}}</td>
			</tr>
		</tbody> 
		</table>
	 </div>
		`
})

	
new Vue({ el: '#components-rankings' })
