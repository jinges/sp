module.exports = function (router){
	router.map({
		'/': {
			title: '首页',
			component: require('./views/index.vue')
		},
		'/list': {
			title: '列表',
			component: require('./views/list.vue')
		},
		'/detail:id': {
			title: '详情',
			component: require('./views/detail.vue')
		},
		'/cart': {
			title: '购物车',
			component: require('./views/cart.vue')
		},
		'/order': {
			title: '订单',
			component: require('./views/order.vue')
		},
		'/payment': {
			title: '支付',
			component: require('./views/payment.vue')
		},
		'/center': {
			title: '用户中心',
			component: require('./views/center.vue')
		},
		'/login': {
			title: '登录',
			component: require('./views/login.vue')
		},
		'/regist': {
			title: '注册',
			component: require('./views/regist.vue')
		},
		'/authenticate': {
			title: '验证身份',
			component: require('./views/authenticate.vue')
		},
		'/changepassword/:name': {
			title: '修改密码',
			name: 'changepassword',
			component: require('./views/changepassword.vue')
		}
	})
}