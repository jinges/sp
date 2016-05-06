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
		<div class="form-group">
			<field 
				type="number" 
				label="手机号"
				model="username" 
				reg="/^1[3|5|7|8]\d{9}$/"
				error="手机号码错误"
				:isnull = 'isnull'
				:value.sync="username"></field>
		</div>
		<div class="form-group">
			<field 
				type="password" 
				label="密码"
				model="password" 
				reg="/\w{6,}/"
				error="密码格式错误"
				:isnull = 'isnull'
				:value.sync="password"></field>
		</div>
		<div class="form-group button-gruop">
			<span type="submit" class="button" :disabled="disabled" v-touch:tap="login">登录</span>
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
				password: '',
				isnull: false
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
					this.isnull = true;
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