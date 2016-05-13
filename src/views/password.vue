<template>
	<form>
		<div class="form-group">
			<field 
				type="password" 
				label="密码"
				reg="/^\w{6,16}$/"
				error="6~16位数字、字母"
				:isnull = 'isnull'
				:value.sync="password"></field>
		</div>
		<div class="form-group">
			<field 
				type="password" 
				label="确认密码"
				:reg="regPassWord"
				error="密码不一致"
				:isnull = 'isnull'
				:value.sync="rePassword"></field>
		</div>
		<div class="form-group button-group">
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
				regPassWord: '',
				isnull: false
			}
		},
		methods:{
			midify(){
				if(!this.password || !this.rePassword) {
					this.isnull = true;
					return false;
				}

				fetch.password({
					name: this.name,
					password: this.password,
					rePassword: this.rePassword
				}).then(result=>{
					console.log(result);
				});
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