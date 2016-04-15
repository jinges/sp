<template>
<div class="textfield">
	<input type="{{type}}"  class="textfield__input" debounce="500" 
		v-model="fieldtext" 
		:value="value" 
		:class="{error: isError, no_empty: no_empty}" />
	<label class="textfield__label">{{label}}</label>
	<span class="error__text">{{error}}</span>
</div>
</template>
<script type="text/javascript">
	export default{
		props: {
			type: String,
			label: String,
			reg: String,
			error: String,
			value: String 
		},
		data(){
			return {
				isError: false,
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
					this.isError = true;
					this.no_empty = false;
					return false;
				}
				this.isError = false;
				this.no_empty = true;
				
				this.value = val;
			}
		}
	}
</script>