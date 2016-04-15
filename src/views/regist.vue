<style lang="sass">

</style>
<template>
	<form>
		<captcha :username.sync='obj.username' :captcha.sync='obj.captcha'></captcha>
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
				:value.sync="obj.repassword"></field>
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
	import Action from '../actions/index'

	export default {
		components:{
			Radio,
			Field,
			Captcha
		},
		data(){
			return {
				obj: {
					username: '',
					captcha: '',
					password: '',
					repassword: ''
				},
				password: '',
				regPassWord: ''
			}
		},
		route: {
			data() {
				console.log( this.obj);
			}
		},
		methods:{
			regist(){
				console.log(this.obj);
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