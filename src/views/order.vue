<style lang="sass">
$orderColor: rgba(233, 233, 233, 1);
.order{
	background-color: $orderColor;
	padding: 8px 16px;
	.l-prop{
		padding-right:0;
		flex:1;
		.title{
			height: 50px;
			line-height: 60px;
		}
		i{
			padding: 4px 6px;
			background-color: $orderColor;
		}
	}
	.price{
		height:96px;
		line-height:96px;
		color: $orderColor;
	}

	.button{
		margin: 30px 0 0;
		color: #fff;
		background-color: rgba(56, 71, 78, 1);
	}
}
.total{
	background-color:#fff;
	ul{
		padding: 16px 16px 0;
	}
	li{
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid $orderColor;
		display: flex;
		&:last-child{
			border-width:0;
		}
	}
	em{
		width: 80px;
	}
	span{
		flex:1;
		display: inline-block;
		text-align: right;
	}
}
</style>
<template>
<article class="order">
<ul class="list">
	<li v-for="item in list"  class="grid">
		<div class="l-content grid">
			<span class="l-img"><img src="../assets/images/image_card.jpg"></span>
			<span class="l-prop">
				<span class="title">{{item.title}}</span>
				<span class="property">
					<i>M</i>
					<i>红色</i>
					<i>X {{item.count}}</i>
				</span>
			</span>
			<span class="price">{{item.price * item.count | currency '￥'}}</span>
		</div>
	</li>
</ul>
<div class="total">
	<ul>
		<li><em>总计：</em><span>{{amount | currency '￥'}}</span></li>
		<li><em>邮费：</em><span>12元</span></li>
	</ul>
</div>
<button class="button">确认订单</button>
</article>
</template>
<script type="text/javascript">

	export default {
		data(){
			return {
				list:  [{id: 1,title: '商品1', count: 1, price: 65, isCheck: false},
					   {id: 2,title: '商品2', count: 2, price: 48, isCheck: true},
					   {id: 3,title: '商品3', count: 1, price: 20, isCheck: false}
					],
				amount: 0,
				count: 0,
				showId:0
			}
		},
		route: {
			data() {
				// console.log( this.$route);
				
			}
		},
		computed:{
			amount(){
				var amount = 0;
				this.list.forEach(function(item){
					amount += item.price * item.count;
				});
				return amount;
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
				})
			}
		}
	}
</script>