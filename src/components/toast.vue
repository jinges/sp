<template>
	<div class="toast" v-show="toastshow">
		<p class="toast-wrapper">{{text}}</p>
	</div>
</template>
<script>
	export default{
		props:{
			text: String,
			toastshow: Boolean
		},
		watch:{
			toastshow(newVal){
				var that = this;
				if(newVal) {
					setTimeout(()=>{
						that.toastshow = false
					}, 2000)
				}
			}
		}
	}
</script>