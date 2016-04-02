<template>
	<h1>cart</h1>
	<label><input type="checkbox" @click="checkAll" v-model="checkall" />全选</label>
	<br/>
	<label @click="delAll">清空购物车</label>
	<ul>
		<li  v-for="item in list">
			<input type="checkbox" 
				v-model="item.isCheck" 
				@click="checkMe($event, item.id)"
			 />
			<span>{{item.title}}</span>    
			<span>
				<em class="btn btnNum" @click="reduce(item.id)">-</em>
				<em class="txt" style="width:60px; border:1px solid #e8e8e8;">{{item.count}}</em>
				<em @click="plus(item.id)" class="btn btnNum">+</em>个 
			</span>
			<span>{{item.price | currency '￥'}}</span>
			<span @click="delete(item.id)" class="btn btnNum">delete</span>
		</li>
	</ul>
	<span>{{ck_cart}}  {{amount}}  {{count}}</span>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				list: [],
				checkall: false,
				amount: 0,
				count: 0
			}
		},
		route: {
			data() {
				// console.log( this.$route);
				this.list = [{id: 1,title: '商品1', count: 1, price: 65, isCheck: false},
					   {id: 2,title: '商品2', count: 2, price: 48, isCheck: false},
					   {id: 3,title: '商品3', count: 1, price: 20, isCheck: false}
					];
			}
		},
		methods: {
			checkAll(e){
				var that = this;
            	// that.ck_cart = [];
            	that.amount = 0;
            	that.count = 0;
				this.list.forEach(function(item){
					var flag = e.target.checked;
                	item.isCheck = flag;
                	if(flag) {
                		that.amount+=item.price*item.count;
                		that.count+=item.count;
                	}
            	});
			},
			checkMe(e, id){
				var dom = e.target;
				var that = this;
            	that.amount = 0;
            	that.count = 0;

				if(dom.checked){
					this.list.forEach(function(item){
						if(item.id == id) {
							item.isCheck = true;
						}
						if(item.isCheck) {
	                		that.amount+=item.price*item.count;
	                		that.count+=item.count;
						}
					})
				} else {
					this.checkall = false;
					this.list.forEach(function(item){
						if(item.id == id) {
							item.isCheck = false;
						}
						if(item.isCheck) {
	                		that.amount+=item.price*item.count;
	                		that.count+=item.count;
						}
					})
				}
			},
			plus(id){
				var that = this;
				that.amount = 0;
            	that.count = 0;
				this.list.forEach(function(item){
					if(id==item.id) {
						item.count ++;
						item.isCheck = true;
					}
					if(item.isCheck) {
                		that.amount+=item.price*item.count;
                		that.count+=item.count;
					}
				})
			},
			reduce(id){
				var that = this;
				that.amount = 0;
            	that.count = 0;
				this.list.forEach(function(item){
					if(id==item.id) {
						item.count = item.count > 1 ? --item.count : 1;
						item.isCheck = true;
					}
					if(item.isCheck) {
                		that.amount+=item.price*item.count;
                		that.count+=item.count;
					}
				})
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
		}
	}
</script>