function featuredController($scope, $rootScope, app_service) {

  $scope.featured = [];

  $scope.getFeaturedVideos = function() {
    app_service.getFeaturedVideos().then(function(response){
      $scope.featured = response.data;
    });
  };

  $scope.init = (function() {
    $scope.getFeaturedVideos();
  })();
}