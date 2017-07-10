function serviceClientManager( $http ){
    var _serviceDefinition = {
        callServiceGet : callServiceGet,
        callServicePost : callServicePost
    }

    function callServiceGet( url, successCallback, errorCallback ){
        var promise = $http({
            method : 'GET',
            url : url
        }).then( successCallback, errorCallback );
    }

    function callServicePost( url, data, successCallback, errorCallback ){
        var promise = $http({
            method : 'POST',
            url : url,
            data : data
        }).then( successCallback, errorCallback );
    }

    return _serviceDefinition;
}