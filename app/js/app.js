'use strict';
var app = angular.module('app', ['ngRoute', 'ngResource']);
app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/user/home.html',
        controller: 'HomeController'
    });
    $routeProvider.when('/login', {
        templateUrl: 'templates/user/login.html',
        controller: 'LoginController'
    });
    $routeProvider.when('/register', {
        templateUrl: 'templates/user/register.html',
        controller: 'RegisterController'
    });
    $routeProvider.otherwise(
        { redirectTo: '/' }
    );
});
