(function(){
  angular.module('movieApp')
.factory('movieService', movieService);

function movieService($http) {
  console.log('hitting movieService');
  var URL = 'http://www.omdbapi.com/?i=';

  return {
    getMovie: function(id) {
      console.log(id);
      return $http.get(URL + id)
      .then(function (result) {
        console.log(result.data);
        return result.data;
      })
    }
  }
}
})();
