var API_KEY = 'fec8b5ab27b292a68294261bb21b04a5';
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

//Main page controller
app.controller('MainController', function($scope, $http) {
  $http.get("http://api.themoviedb.org/3/movie/now_playing?api_key=" + API_KEY)
    .then(function(response) {
      $scope.response = response;
      console.log(response);
    });
});

//Details page controller
app.controller('DetailsController', function($scope, $http, $routeParams) {
  $scope.movieId = $routeParams.movieId;
  $http.get("http://api.themoviedb.org/3/movie/" + $scope.movieId + "?api_key=" + API_KEY)
    .then(function(response) {
      $scope.response = response;
      console.log(response);
    });
});
