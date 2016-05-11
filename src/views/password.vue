<template>
	<form>
		<div class="form-group">
			<field 
				type="password" 
				label="密码"
				reg="/^\w{6,16}$/"
				error="6~16位数字、字母"
				:value.sync="password"></field>
		</div>
		<div class="form-group">
			<field 
				type="password" 
				label="确认密码"
				:reg="regPassWord"
				error="密码不一致"
				:value.sync="rePassword"></field>
		</div>
		<div class="form-group">
			<a v-touch:tap="midify" class="button">确定</a>
		</div>
	</form>
</template>
<script>
	import fetch from '../fetch/index'
	import Field from '../components/field.vue'

	export default{
		components:{
			Field
		},
		data(){
			return {
				password: '',
				rePassword: '',
				regPassWord: ''
			}
		},
		methods:{
			midify(){
				if(!this.password && !this.rePassword) {
					return false;
				}

				fetch.password({
<<<<<<< HEAD
					name: this.name,
					password: this.password,
					rePassword: this.rePassword
				}).then(result=>{

				});
=======
					password: this.password,
					rePassword: this.rePassword
				}).then(
					
				);
>>>>>>> a590cd5dc9ef300c0e17a0f39efeecc1692c4278
			}
		},
		watch:{
			password(newVal, oldVal){
				if(newVal != oldVal) {
					this.regPassWord = '/^'+ newVal +'$/';
				}
			}
		},
		route: {
			data ({ to: { params: { name }}}) {
			    this.name = name
			}
		}
	}
</script>