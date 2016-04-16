import $http from './http'

let HTTP = '//127.0.0.1:80/'

// (url, data, method, options)
export default {
	getcode  : (data) => $http(HTTP+'getCode', data, 'post'),
	regist   : (data) => $http(HTTP+'regist', data, 'post'),
	login    : (data) => $http(HTTP+'login', data, 'post'),
	loginout : (data) => $http(HTTP+'loginout', data, 'get'),
	password : (data) => $http(HTTP+'password', data, 'post'),
	userinfo : (data) => $http(HTTP+'userinfo', data, 'get'),
	authenticate : (data) => $http(HTTP+'authenticate', data, 'post'),
	
	products : (data) => $http(HTTP+'productList', data, 'get'),
	product  : (data) => $http(HTTP+'productDetail', data, 'get')
}	