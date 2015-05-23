app.factory('networkService',
    function ($resource, baseServiceUrl) {
        var networkResource = $resource(
            baseServiceUrl + '/api/posts/1000',
            null,
            {
                'getAll': {method:'GET'}
            }
        );
        return {
            getPosts: function(params, success, error) {
                return networkResource.getAll(params, success, error);
            }
        }
    }
);
