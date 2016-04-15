<template>
	<div class="form-group">
		<field 
		type="number" 
		label="手机号"
		reg="/^1[3|5|7|8]\d{9}$/"
		error="手机号码不正确"
		:value.sync="phone"></field>
	</div>
	<div class="form-group grid">
		<div class="cell--2-col">
			<field 
			type="number" 
			label="验证码"
			reg="/^\d{6}$/"
			error="验证码错误"
			:value.sync="code"></field>
		</div>
		<div class="cell--2-col getcode">
			<span class="button" v-touch:tap="getCode">{{buttonText}}</span>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Field from './field.vue'
	
	export default {
		components:{
			Field
		},
		props:{
			username: String,
			captcha: String
		},
		data(){
			return {
				buttonText: '获取验证码', 
				phone: '',
				code: '',
				isGetCode: false
			}
		},
		watch:{
			phone(newVal, oldVal){
				if(newVal != oldVal) {
					this.username = newVal;
				}
			},
			code(newVal, oldVal){
				if(newVal != oldVal) {
					this.captcha = newVal;
				}
			}
		},
		methods:{
			getCode(){
				var sec = 60;
				if(!this.phone || this.isGetCode) {
					return false;
				}

				var current = setInterval(()=>{
					this.buttonText = --sec+'s';
					if(sec == 0) {
						clearInterval(current);
						this.buttonText = '获取验证码'
						this.isGetCode = false;
					}
				}, 1000);
				this.isGetCode = true;
				console.log(this.phone);
			}
		}
	}
</script>
<style lang="sass">
	.getcode{
		padding-left: 32px;
	}
</style>