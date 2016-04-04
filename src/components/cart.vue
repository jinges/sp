<style lang="sass">
	.cart{
		background-color: rgba(243, 134, 105, 1);
		padding: 8px 16px;
	}
	.cart-list{
		li{
			position: relative;
			margin: 16px 0;
			background-color: rgba(255, 255, 255, 1);
			flex-wrap: nowrap;
			padding: 0;
			overflow: hidden;
			&.show{
				.l-del{
					margin-left:0;
				}
				.l-content{
					margin-right: -80px;
				}
			}
		}
		.l-content{
			width: 100%;
			padding: 16px;
      		transition: transform .3s cubic-bezier(0,0,.2,1),
                  width .3s cubic-bezier(0,0,.2,1),
                  height .3s cubic-bezier(0,0,.2,1),
                  opacity .6s cubic-bezier(0,0,.2,1),
                  -webkit-transform .3s cubic-bezier(0,0,.2,1);
		}
		.l-img{
			width: 80px;
			height: 80px;
			margin: 8px;
			border-radius: 50%;
			overflow: hidden;
		}
		.l-prop{
			padding: 0 16px;
			width: calc(100% - 96px - 40px - 32px);
			.title{
				font-size: 18px;
				height: 30px;
				line-height: 30px;
				display: block;
			}
			.property{
				font-size: 12px;
				height: 46px;
				line-height: 20px;
				display: block;
				color: rgb(181, 181, 181);
			}
			.price{
				display: block;
				height: 20px;
				line-height: 30px;
				color: rgb(181, 181, 181);
			}
		}
		.count{
			width: 40px;
			height: 70px;
		}
		.c-item{
			width: 40px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			display: block;
			padding:3px 3px 3px 13px;
			box-sizing: border-box;
			&:nth-child(2) {
				width: 40px;
				padding: 0;
				text-align: left;
				height:10px;
				line-height: 10px;
			}
		}
		.l-del{
			width: 80px;
			display: block;
			height: 128px;
			line-height: 128px;
			margin-left: -80px;
			text-align: center;
			color: #fff;
			background-color: rgba(56, 71, 78, 1);
      		transition: transform .3s cubic-bezier(0,0,.2,1),
                  width .3s cubic-bezier(0,0,.2,1),
                  height .3s cubic-bezier(0,0,.2,1),
                  opacity .6s cubic-bezier(0,0,.2,1),
                  -webkit-transform .3s cubic-bezier(0,0,.2,1);
		}
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
<ul class="cart-list">
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