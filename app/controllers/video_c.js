function videoController($scope, $routeParams, $rootScope, app_service) {

  $scope.videos = [];

  $scope.getVideosByLabel = function(label) {
    app_service.getLastestVideosByLabel(label).then(function(response){
      $scope.videos = response.data.data;
    });
  };

  $scope.init = (function() {
  	var label = $routeParams.label;
    $scope.getVideosByLabel(label);
  })();
}