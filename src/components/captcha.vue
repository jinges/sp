<template>
	<div>
		<div class="form-group">
			<field 
			type="number" 
			label="手机号"
			reg="/^1[3|5|7|8]\d{9}$/"
			:value.sync="phone"></field>
		</div>
		<div class="form-group grid">
			<div class="cell--2-col">
				<field 
				type="number" 
				label="验证码"
				reg="/^\d{6}$/"
				:value.sync="code"></field>
			</div>
			<div class="cell--2-col getcode">
				<button class="button" v-touch:tap="getCode">{{buttonText}}</button>
			</div>
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
				code: ''
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
				if(!this.phone) {
					return false;
				}
				var current = setInterval(()=>{
					this.buttonText = --sec+'s';
					if(sec == 0) {
						clearInterval(current);
						this.buttonText = '获取验证码'
					}
				}, 1000)
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