function latestController($scope, $rootScope, app_service) {

  $scope.latest = [];

  $scope.getLatestVideos = function() {
    app_service.getLastestVideos().then(function(response){
      $scope.latest = response.data;
    });
  };

  $scope.init = (function() {
    $scope.getLatestVideos();
  })();
}