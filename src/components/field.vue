<template>
<div class="textfield">
	<input type="{{type}}"  class="textfield__input" debounce="500" 
		v-model="fieldtext" 
		:value="value" 
		:class="{error: error, no_empty: no_empty}" />
	<label class="textfield__label">{{label}}</label>
</div>
</template>
<script type="text/javascript">
	export default{
		props: {
			type: String,
			label: String,
			model: String,
			reg: String,
			value: String 
		},
		data(){
			return {
				error: false,
				no_empty: this.value.length 
			}
		},
		watch:{
			fieldtext(val){
				var reg = eval(this.reg);
				if(!val){
					return false;
				}
				else if(!reg.test(val)) {
					this.error = true;
					this.no_empty = false;
					return false;
				}
				this.error = false;
				this.no_empty = true;
				var result = {
					name: this.model,
					value: val
				};
				this.$dispatch('fieldResult', result);
			}
		}
	}
</script>