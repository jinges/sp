<style lang="sass">
	form{
		width: 280px;
		margin: 40px auto 0;
		padding: 40px;
		background: #fff;
	}
</style>
<template>
	<form>
		<captcha :username.sync='obj.username' :captcha.sync='obj.captcha'></captcha>
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
		<div class="form-group">
			<button class="button" v-touch:tap="regist">注册</button>
		</div>
	</form>
</template>
<script type="text/javascript">
	import Radio from '../components/radio.vue'
	import Field from '../components/field.vue'
	import Captcha from '../components/captcha.vue'

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
					captcha: ''
				}
			}
		},
		route: {
			data() {
				console.log( this.obj);
			}
		},
		methods:{
			regist(){
				alert(this.username);
			}
		}
	}
</script>