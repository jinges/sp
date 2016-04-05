<template>
<!-- <radio 
	:checked = "true"
	:value="1"
	label="男"></radio>
<radio 
	:checked = "false"
	:value="0"
	label="女"></radio> -->
<label class="radio" v-touch:tap="checkMe">
	<input type="radio" class="radio__button" 
		v-model="checked" 
		:value="true"
		name="options">
	<span class="radio__label">{{label}}</span>
</label>	
</template>
<script type="text/javascript">
	export default{
		props:{
			checked: Boolean,
			value: Number,
			label: String
		},
		methods:{
			checkMe(){
				var data = this.value;
				this.$dispatch('radioResult', data);
			}
		}
	}
</script>