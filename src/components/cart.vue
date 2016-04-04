<style lang="sass">
	.cart-list{
		li{
			position: relative;
			padding: 16px;
		}
		.l-checkbox{
			width: 30px;
		}
		.l-img{
			width: 80px;
		}
		.count{
			width:100px;
			height: 30px;
		}
		.c-item{
			width: 30px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			&:nth-child(2) {
				width: 40px;
			}
		}
		.l-del{
			position: absolute;
			width: 60px;
			right: 0;
			display: block;
			height: 100%;
			line-height: 100%;
			text-align: center;
		}
	}
</style>
<template>

<checkbox :checked="checkall" :value=0 :label="label"></checkbox>
<ul class="cart-list">
	<li v-for="item in list"  class="grid" >
		<span class="l-checkbox">
			<checkbox :checked="item.isCheck" :value="item.id" :label=" "></checkbox>
		</span>
		<span class="l-img"><img src="../assets/images/image_card.jpg"></span>
		<span class="cell--2-col">
			<span class="title">{{item.title}}</span>
			<span class="price">{{item.price | currency '￥'}}</span>
			<span class="count grid">
				<em class="c-item" @click="compute(item.id, false)">
					<i class="material-icons">&#xE5CB;</i></em>
				<em class="c-item">{{item.count}}</em>
				<em @click="compute(item.id, true)" class="c-item">
					<i class="material-icons">&#xE5CC;</i></em>
			</span>
		</span>
		<span class="l-del">
  			<a  @click="delete(item.id)"><i class="material-icons">delete</i></a>
		</span>
	</li>
</ul>
{{amount}}   {{count}}
</template>
<script type="text/javascript">
	import checkbox from './checkbox.vue'

	export default {
		components:{
			checkbox
		},
		data(){
			return {
				list:  [{id: 1,title: '商品1', count: 1, price: 65, isCheck: false},
					   {id: 2,title: '商品2', count: 2, price: 48, isCheck: true},
					   {id: 3,title: '商品3', count: 1, price: 20, isCheck: false}
					],
				checkall: false,
				amount: 0,
				count: 0,
				label: '全选'
			}
		},
		route: {
			data() {
				// console.log( this.$route);
				
			}
		},
		methods: {
			compute(id, flag){
				var that = this;
				that.amount = 0;
            	that.count = 0;
				this.list.forEach(function(item){
					if(id==item.id) {
						item.count = flag ? ++item.count: (item.count > 1? --item.count : 1);
						item.isCheck = true;
					}

					if(item.isCheck) {
                		that.amount+=item.price*item.count;
                		that.count+=item.count;
					}
				});
			},
			delete(id){
				var that = this;
				that.amount = 0;
            	that.count = 0;
				this.list.forEach(function(item){
					if(id==item.id) {
						that.list.$remove(item);
					}
					if(item.isCheck) {
                		that.amount+=item.price*item.count;
                		that.count+=item.count;
					}
				})
			},
			delAll(){
            	that.amount = 0;
            	that.count = 0;
				this.list = [];
			}
		},
		events: {
			'result': function(result){
				var that = this;
				var id = result.id;
            	that.amount = 0;
            	that.count = 0;

        		this.list.forEach(function(item){

					if((id > 0 && item.id == id) || id == 0) {
						item.isCheck = result.checked;
					}

					if(item.isCheck) {
                		that.amount+=item.price*item.count;
                		that.count+=item.count;
					}
				})
			}
		}
	}
</script>