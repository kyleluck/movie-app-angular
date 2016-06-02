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
    .when('/toprated', {
      controller: 'TopRatedController',
      templateUrl: 'toprated.html'
    })
    .when('/upcoming', {
      controller: 'UpcomingController',
      templateUrl: 'upcoming.html'
    })
    .when('/popular', {
      controller: 'PopularController',
      templateUrl: 'popular.html'
    })
    .when('/search', {
      controller: 'SearchController',
      templateUrl: 'search.html'
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

  //get reviews
  $http.get("http://api.themoviedb.org/3/movie/" + $scope.movieId + "/reviews?api_key=" + API_KEY)
    .then(function(response) {
      $scope.reviews = response;
    });
});

//Top Rated controller
app.controller('TopRatedController', function($scope, $http) {
  $http.get("http://api.themoviedb.org/3/movie/top_rated?api_key=" + API_KEY)
    .then(function(response) {
      $scope.response = response;
    });
});

//Upcoming controller
app.controller('UpcomingController', function($scope, $http) {
  $http.get("http://api.themoviedb.org/3/movie/upcoming?api_key=" + API_KEY)
    .then(function(response) {
      $scope.response = response;
    });
});

//Popular controller
app.controller('PopularController', function($scope, $http) {
  $http.get("http://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY)
    .then(function(response) {
      $scope.response = response;
    });
});

//Search controller
app.controller('SearchController', function($scope, $http, $httpParamSerializerJQLike) {
  $scope.searchMovies = function() {
    $http.get("http://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query=" + $httpParamSerializerJQLike($scope.searchtext))
      .then(function(response) {
        $scope.response = response;
      });
  };
});
