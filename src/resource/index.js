import fetch from './fetch'


// (url, data, method, options)
export default {
	login    : (data) => fetch('login', data, 'POST'),
	regist   : (data) => fetch('regist', data, 'POST'),
	products : (data) => fetch('productList', data, 'GET'),
	product  : (data) => fetch('productDetail', data, 'GET')
}	