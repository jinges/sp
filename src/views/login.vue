<style lang="sass">
	.login{
		width: 100%;
		height: 100%;
		position: fixed;
		background: url('../assets/images/header.jpg');
		background-size: cover;
	}
</style>
<template>
<section class="login">
	<form>
		<field 
			type="number" 
			label="手机号"
			model="username" 
			reg="/^1[3|5|7|8]\d{9}$/"
			error="手机号码错误"
			:value.sync="username"></field>
		<field 
			type="password" 
			label="密码"
			model="password" 
			reg="/\w{6,}/"
			error="密码格式错误"
			:value.sync="password"></field>
		<div>
			<button type="submit" class="button" :disabled="disabled" v-touch:tap="login">登录</button>
		</div>
	</form>
</section>
</template>
<script type="text/javascript">
	import Field from '../components/field.vue'
	import fetch from '../fetch/index'

	export default {
		components: {
			Field
		},
		data(){
			return{
				disabled: true,	
				username:'',
				password: ''
			}
		},
		route: {
			data() {
				console.log( this.$route);
			}
		},
		methods:{
			login(){ 
				if(!this.username || !this.password) {
					return false;
				}

				fetch.login({
					username: this.username,
					password: this.password
				}).
				then(
					(res) => {

					},
					(res) => {

					}
				);
				
			}
		}
	}
</script>