<style lang="sass">
	.login{
		width: 100%;
		height: 100%;
		position: fixed;
		background: url('../assets/images/header.jpg');
		background-size: cover;
	}
	form{
		width: 280px;
		margin: 40px auto 0;
		padding: 40px;
		background: #fff;
	}
</style>
<template>
	<form>
		<field 
		type="number" 
		label="手机号"
		model="username" 
		reg="/^1[3|5|7|8]\d{9}$/"
		value=""></field>
	<field 
		type="text" 
		label="昵称"
		model="nickname" 
		reg="/\w{6,}/"
		value="冯亮"></field>
		
	<radio 
		:checked = "true"
		:value="1"
		label="男"></radio>
	<radio 
		:checked = "false"
		:value="0"
		label="女"></radio>
	</form>
</template>
<script type="text/javascript">
	import Radio from '../components/radio.vue'
	import Field from '../components/field.vue'

	export default {
		components:{
			Radio,
			Field
		},
		data(){
			return {
				obj: Object
			}
		},
		route: {
			data() {
				console.log( this.$route);
			}
		},
		events:{
			result(data){
				console.log(data);
			},
			radioResult(data) {
				console.log(data);
			}
		}
	}
</script>