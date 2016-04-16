let Vue = require('Vue');

export default function(url, data, method) {
	Vue.http[method]({
		url: url,
		data: data
	}).then(
		(result) => result,
		(result) => result 
	)
}