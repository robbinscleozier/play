function showsController($scope, $rootScope, app_service) {

  $scope.getShows = function() {
    app_service.getShows().then(function(response){
      shows = response.data;
      $scope.shows = $scope.formatShows(shows);
    });
  };

  $scope.formatShows = function(shows) {
  	for (var i = 0; i < shows.length; i++) {
  		shows[i].image = shows[i].name.replace( / +/g, '-') .toLowerCase();
  	}
  	return shows;
  };

  $scope.init = (function() {
    $scope.getShows();
  })();
}