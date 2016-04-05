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
<section class="login">
	<form>
		<field :params="fieldUser"></field>
		<field :params="fieldPassword"></field>
		<div>
			<button type="submit" class="button" :disabled="disabled" v-touch:tap="login">登录</button>
		</div>
	</form>
</section>
</template>
<script type="text/javascript">
	import Field from '../components/field.vue'

	export default {
		components: {
			Field
		},
		data(){
			return{
				fieldUser: {
					type: 'number',
					label: '手机号码',
					model: 'username',
					reg: /^1[3|5|7|8]\d{9}$/ 
				},
				fieldPassword: {
					type: 'password',
					label: '密码',
					model: 'password',
					reg: /\w{6,}/
				},
				disabled: true,
				userObj: {}
			}
		},
		route: {
			data() {
				console.log( this.$route);
			}
		},
		methods:{
			login(){ 
				if(!this.userObj.username) {
					return false;
				}
				console.log(this.userObj);
			}
		},
		events:{
			result(obj){
				this.userObj[obj.name] = obj.value;
			}
		}
	}
</script>