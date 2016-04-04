<style lang="sass">
	.cart{
		background-color: rgba(243, 134, 105, 1);
		padding: 8px 16px;
	}
	.jiesuan{
		text-align: center;
		padding: 8px;
		p{
			height: 50px;
			line-height:50px;
			color: #fff;
			font-weight: 700;
		}
		.button{
			width: 60%;
			color: #fff;
			background-color: rgba(56, 71, 78, 1);
		}
	}
</style>
<template>
<article class="cart">
<ul class="list">
	<li v-for="item in list"  class="grid" 
		:class='{"show": item.id==showId}' 
		v-touch:swiperight="swipeDelete(item.id)"
		v-touch:swipeleft="swipeDelete(0)">
		<span class="l-del" >
  			<a  v-touch:tap="delete(item.id)"><i class="material-icons">delete</i></a>
		</span>
		<div class="l-content grid">
			<span class="l-img"><img src="../assets/images/image_card.jpg"></span>
			<span class="l-prop">
				<span class="title">{{item.title}}</span>
				<span class="property">尺寸: M 颜色：红色</span>
				<span class="price">{{item.price | currency '￥'}}</span>
			</span>
			<span class="count">
				<em class="c-item" v-touch:tap="compute(item.id, true)">
					<i class="material-icons">keyboard_arrow_up</i></em>
				<em class="c-item">{{item.count}}</em>
				<em class="c-item" v-touch:tap="compute(item.id, false)">
					<i class="material-icons">keyboard_arrow_down</i></em>
			</span>
		</div>
	</li>
</ul>
<div class="jiesuan">
	<p>{{amount | currency '￥'}}</p>
	<button class="button">结算</button>
</div>
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
			swipeDelete(id){
				this.showId = id;
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