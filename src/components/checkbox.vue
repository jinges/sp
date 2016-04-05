<template>
<!-- <checkbox 
	:checked="true" 
	:value="1" 
	label="金融"></checkbox>
<checkbox 
	:checked="false" 
	:value="2" 
	label="地产"></checkbox> -->
<label class="checkbox" v-touch:tap="checkMe($event)">
<input type="checkbox" class="checkbox__input" 
	v-model="checked" 
	:true-value="true"
	:false-value="false"
	/>
<span class="checkbox__label">{{label}}</span>
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
			checkMe(e){
				var result = {
					'id': this.value,
					'checked': !this.checked
				};

				this.$dispatch('chekcBoxResult', result);
			}
		}
	}
</script>