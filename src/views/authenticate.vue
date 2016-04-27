<template>
	<form >
		<captcha :username.sync='username' :isnull.sync="isnull" :captcha.sync='captcha'></captcha>
		<div class="form-group">
			<span class="button" v-touch:tap="validation">下一步</span>
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
				captcha: '',
				isnull: false
			}
		},
		methods:{
			validation(){
				if(!this.username && !this.captcha) {
					this.isnull = true;
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