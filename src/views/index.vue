<template>
	<label class="checkbox" for="checkbox-all">
	  <input type="checkbox" id="checkbox-all" class="checkbox__input"  @click="checkAll" v-model="checkall">
	  <span class="checkbox__label">全选</span>
	</label>

	<label class="radio" for="radio1">
	  <input type="radio" id="radio1" class="radio__button" name="options">
	  <span class="radio__label">男</span>
	</label>
	<label class="radio" for="radio2">
	  <input type="radio" id="radio2" class="radio__button" name="options">
	  <span class="radio__label">女</span>
	</label>

	<div class="textfield">
		<input type="text" class="textfield__input" />
		<label class="textfield__label">用户名</label>
	</div>
	<div class="textfield">
		<input type="number" class="textfield__input" />
		<label class="textfield__label">手机号</label>
	</div>

	<button class="button">
	  按钮
	</button>
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