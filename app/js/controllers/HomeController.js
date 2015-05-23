'use strict';
app.controller('HomeController',
    function ($scope, networkService, notifyService) {
        networkService.getPosts(
            null,
            function success(data) {
                $scope.posts = data;
            },
            function error(err) {
                notifyService.showError("Cannot load posts", err);
            }
        );
    }
);
