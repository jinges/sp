<template>
	<form >
		<captcha :username.sync='username' :captcha.sync='captcha'></captcha>
		<div class="form-group">
			<button class="button" v-touch:tap="validation">下一步</button>
		</div>
	</form>
</template>
<script>
	import Captcha from '../components/captcha.vue'
	import fetch from '../fetch/index'

	export default{
		components:{
			Captcha
		},
		data(){
			return {
				username: '',
				captcha: ''
			}
		},
		methods:{
			validation(){
				if(!this.username && !this.captcha) {
					return false;
				}

				fetch.authenticate({
					username: this.username,
					captcha: this.captcha,
					date: Date.parse(new Date())
				}).then(
					(result) => {

					},
					(result) => {
						
					}
				);
			}
		}
	}
</script>  