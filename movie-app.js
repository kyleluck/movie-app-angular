//create angular module with angular route dependency
var app = angular.module('movie-app', ['ngRoute']);

//configure routeProvider
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'main.html'
    })
    .when('/:movieId', {
      templateUrl: 'details.html'
    })
});
