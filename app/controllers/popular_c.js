function popularController($scope, $rootScope, app_service) {

  $scope.popular = [];

  $scope.getPopularVideos = function() {
  	app_service.getPopularVideos().then(function(response){
      $scope.popular = response.data;
    });
  };

  $scope.init = (function() {
    $scope.getPopularVideos();
  })();
}