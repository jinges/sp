import Vue from 'Vue'

export default function(url, data, method) {
	Vue.$http({
		url: url,
		data: data,
		method: method
	}).then(
		(result) => result,
		(result) => result 
	)
}