<template>
	<form >
		<captcha :name.sync='name' :isnull.sync="isnull" :captcha.sync='captcha'></captcha>
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
				name: '',
				captcha: '',
				isnull: false
			}
		},
		methods:{
			validation(){
				if(!this.name && !this.captcha) {
					this.isnull = true;
					return false;
				}

				fetch.authenticate({
					name: this.name,
					captcha: this.captcha,
					date: Date.parse(new Date())
				}).then(result=>{
					if(result.status != 200) {
						return false;
					}
					this.route.go({'name': 'password', params: {'name': this.name}});
				});
			}
		}
	}
</script>  