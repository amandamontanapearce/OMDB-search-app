angular.module('movieApp')
.controller('homeController', homeController);

function homeController($scope, $state){
  console.log('hitting homecontroller');
  $scope.getMovies = function () {
    console.log('hitting getMovies')
    $state.go('home.movies', {
      title: $scope.title,
    });
  }
};
