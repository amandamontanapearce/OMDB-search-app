angular.module('movieApp').controller('moviesController', moviesController);

function moviesController($scope, $stateParams, moviesService) {
  console.log('hitting moviesController');
  var title = $stateParams.title;

  moviesService.getMovies(title).then( function(movies){
    $scope.movies = movies;
  });
}
