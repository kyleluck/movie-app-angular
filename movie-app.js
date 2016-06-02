//create angular module with angular route dependency
var app = angular.module('movie-app', ['ngRoute']);

//configure routeProvider
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'main.html'
    })
    .when('/:movieId', {
      controller: 'DetailsController',
      templateUrl: 'details.html'
    })
});

app.controller('MainController', function($scope, $http, $routeParams) {

});

app.controller('DetailsController', function($scope, $http, $routeParams) {

});
