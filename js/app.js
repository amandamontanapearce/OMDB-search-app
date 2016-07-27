angular.module('movieApp', ['ui.router'])
.config(config)

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url:'/',
    controller: 'homecontroller',
    templateUrl: 'js/views/home.html'
  });


}
