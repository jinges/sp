<template>
	<h1>{{name}}</h1>
	<span>性别: {{gender}}</span>
</template>
<script type="text/javascript">
	import fetch from '../fetch/index'
	export default {
		data(){
			return {
				title: '个人中心',
				name: String,
				gender: String
			}
		},
		route: {
			data() {
				// console.log( this.$route); //
				fetch.userinfo({
					date: Date.parse(new Date())
				}).then(result=>{
					const data = result.data;

					this.name = data.name;
					this.gender = data.gender>0?'男':'女'
				})
			}
		}
	}
</script>