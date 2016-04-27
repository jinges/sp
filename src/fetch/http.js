let Vue = require('Vue');

export default function(url, data, method) {
	Vue.http[method](url, data, {"emulateJSON": true}).then(
		result => result,
		result => result 
	)
}