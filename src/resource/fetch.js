
export.model = function (url, data, option, method) {
    method = method || "get";
    return Vue.http[method](url, data, option).then(function (response) {
        return response.data
    }, function (response) {
        console.log(response)
        return response
    });
}