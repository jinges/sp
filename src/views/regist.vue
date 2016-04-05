<template>
	<radio 
		:checked = "true"
		:value="1"
		label="男"></radio>
	<radio 
		:checked = "false"
		:value="0"
		label="女"></radio>
	<checkbox 
		:checked="true" 
		:value="1" 
		label="金融"></checkbox>
	<checkbox 
		:checked="false" 
		:value="2" 
		label="地产"></checkbox>
	
	<field 
		:type="number" 
		label="手机号"
		model="username" 
		reg="/^1[3|5|7|8]\d{9}$/"
		value=""></field>
	<field 
		:type="text" 
		label="昵称"
		model="nickname" 
		reg="/\w{6,}/"
		value="冯亮"></field>
</template>
<script type="text/javascript">
	import Radio from '../components/radio.vue'
	import Checkbox from '../components/checkbox.vue'
	import Field from '../components/field.vue'

	export default {
		components:{
			Radio,
			Checkbox,
			Field
		},
		data(){
			return {
			}
		},
		route: {
			data() {
				console.log( this.$route);
			}
		},
		events:{
			result(data){
				console.log(data);
			}
		}
	}
</script>