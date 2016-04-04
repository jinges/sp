<template>
	<label class="checkbox">
	  <input type="checkbox" class="checkbox__input" 
			v-model="checked" 
			:value = "value"
			@click="checkMe($event)"
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
				var dom = e.target;
				var result = {
					'id': dom.value,
					'checked': dom.checked
				};

				this.$dispatch('result', result);
			}
		}
	}
</script>