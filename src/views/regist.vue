<style lang="sass">

</style>
<template>
	<form>
		<captcha :username.sync='username' :isnull='isnull' :purpose='purpose' :captcha.sync='captcha'></captcha>
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
				:value.sync="repassword"></field>
		</div>
		<div class="form-group grid">
			<div class="cell--2-col">
				<radio 
				:checked = "true"
				:value="1"
				label="男"></radio>
			</div>
			<div class="cell--2-col">
				<radio 
				:checked = "false"
				:value="0"
				label="女"></radio>
			</div>
		</div>
		<div class="form-group button-gruop">
			<a class="button" v-touch:tap="regist">注册</a>
		</div>
	</form>
</template>
<script type="text/javascript">
	import Radio from '../components/radio.vue'
	import Field from '../components/field.vue'
	import Captcha from '../components/captcha.vue'
	import fetch from '../fetch/index'

	export default {
		components:{
			Radio,
			Field,
			Captcha
		},
		data(){
			return {
				username: '',
				captcha: '',
				password: '',
				repassword: '',
				regPassWord: '',
				purpose: 'regist',
				sex: 1,
				isnull: false
			}
		},
		route: {
			data() {
				console.log( this.obj);
			}
		},
		methods:{
			regist(){
				if(!this.username || !this.captcha || !this.password || !this.repassword) {
					this.isnull = true;
					return false;
				}

				fetch.regist({
					username: this.username,
					password: this.password,
					captcha: this.captcha,
					sex: this.sex
				}).then(result=>{
					console.log(result);
				})
			}
		},
		watch:{
			password(newVal, oldVal){
				if(newVal != oldVal) {
					this.regPassWord = '/^'+ newVal +'$/';
				}
			}
		},
		event:{
			radioResult: val =>{
				this.sex = val;
			}
		}
	}
</script>