<template>
	<h1>detail</h1>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				title: '首页'
			}
		},
		route: {
			data() {
				console.log( this.$route);
			}
		}
	}
</script>