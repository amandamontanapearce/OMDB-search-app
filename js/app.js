angular.module('movieApp', ['ui.router'])
.config(config)

function config($stateProvider, $urlRouterProvider) {
  console.log('hitting config');
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url:'/',
    controller: 'homeController',
    templateUrl: 'js/views/home.html'
  }).state('home.movies', {
    url: 'movies/:title',
    controller: 'moviesController',
    templateUrl: 'js/views/movies.html'
  }).state('home.movie', {
    url: 'movie/:id',
    controller: 'detailController',
    templateUrl:'js/views/movie.html'
  });
}
