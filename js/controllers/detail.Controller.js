angular.module('movieApp')
.controller('detailController', detailController);

function detailController($scope, $stateParams, movieService){
  movieService.getMovie($stateParams.id)
  .then(function(movie){
    $scope.movie = movie;
    console.log(movie);
  })
};
