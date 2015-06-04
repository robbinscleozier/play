function showViewController($scope, $rootScope, $routeParams, app_service) {

  $scope.label = '';
  $scope.videos = [];

  $scope.getVideos = function(label) {
    $scope.label = label;
    app_service.getLastestVideosByLabel(label).then(function(response){
      $scope.videos = response.data.data;
    });
  };

  $scope.init = (function() {
    var label = $routeParams.label;
    $scope.getVideos(label);
  })();
}