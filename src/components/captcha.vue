<template>
	<div class="form-group" v-if="login">
		<field 
		type="number" 
		label="手机号"
		reg="/^1[3|5|7|8]\d{9}$/"
		error="手机号码不正确"
		:isnull='isnull'
		:value.sync="phone"></field>
	</div>
	<div class="form-group" v-else>
		<p class="bind-phone">您绑定的号码为<em>{{bindPhone}}</em></p>
	</div>
	<div class="form-group grid">
		<div class="cell--2-col">
			<field 
			type="number" 
			label="验证码"
			reg="/^\d{6}$/"
			error="验证码错误"
			:isnull="isnull && codeNull"
			:value.sync="code"></field>
		</div>
		<div class="cell--2-col getcode">
			<span class="button" v-touch:tap="getCode">{{buttonText}}</span>
		</div>
	</div>
	<toast :text="toastContent" :toastshow.sync="toastShow"></toast>
</template>
<script type="text/javascript">
	import Field from './field.vue'
	import Toast from './toast.vue'
	import fetch from '../fetch/index'
	
	export default {
		components:{
			Field,
			Toast
		},
		props:{
			username: String,
			captcha: String,
			isnull: Boolean,
			purpose: String
		},
		data(){
			return {
				buttonText: '获取验证码', 
				phone: '',
				code: '',
				isGetCode: false,
				bindPhone: '',
				codeNull: true,
				toastShow: false,
				toastContent: '',
				login: this.username != null
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
				if(this.isGetCode) {
					return false;
				}

				if(!this.phone) {
					this.isnull = true;
					this.codeNull = false;
					return false;
				}

				var current = setInterval(() => {
					this.buttonText = --sec+'s';
					if(sec == 0) {
						clearInterval(current);
						this.buttonText = '获取验证码'
						this.isGetCode = false;
					}
				}, 1000);
				this.isGetCode = true;

				fetch.captcha({
					phone: this.username,
					purpose: this.purpose
				}).then(result => {
					this.toastContent = result.data;
					this.toastShow = true;
				});
				
			}
		},
		compiled(){
			// this.phone = '18665877630';
			// this.bindPhone = '186****30';
		},
		route:{
			data(){
				this.bindPhone = '18665877630';
			}
		}
	}
</script>
<style lang="sass">
	.getcode{
		padding-left: 32px;
	}
</style>