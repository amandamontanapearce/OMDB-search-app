(function(){
  angular.module('movieApp')
.factory('moviesService', moviesService);

function moviesService($http) {
  console.log('hitting moviesService');
  var URL = 'http://www.omdbapi.com/?s=';

  return {
    getMovies: function(title) {
      console.log(title);
      return $http.get(URL + title)
      .then(function (result) {
        console.log(result);
        return result.data.Search;
      })
    }
  }
}
})();
