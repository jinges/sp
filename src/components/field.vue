<template>
<div class="textfield">
	<input type="{{params.type}}"  v-model="fieldtext" :class="{error: error, no_empty: no_empty}" class="textfield__input" debounce="500" />
	<label class="textfield__label">{{params.label}}</label>
	<input type="hidden" v-model="type" value="{{params.model}}" />
	<input type="hidden" v-model="reg" value="{{params.reg}}" />
</div>
</template>
<script type="text/javascript">
	export default{
		props: {
			params: Object
		},
		data(){
			return {
				error: false,
				no_empty: false
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
					name: this.type,
					value: val
				};
				this.$dispatch('result', result);
			}
		}
	}
</script>