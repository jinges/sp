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
					password: this.password
				}).then(
					(res) => {

					},
					(res) => {
						
					}
				);
			}
		},
		watch:{
			password(newVal, oldVal){
				if(newVal != oldVal) {
					this.regPassWord = '/^'+ newVal +'$/';
				}
			}
		}
	}
</script>