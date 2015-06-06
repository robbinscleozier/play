function showViewController($scope, $rootScope, $routeParams, app_service) {

  $scope.label = '';
  $scope.videos = [];

  $scope.getVideos = function(label) {
    $scope.label = $scope.slugifyLabel(label);
    app_service.getLastestVideosByLabel(label).then(function(response){
      $scope.videos = response.data.data;
    });
  };

  $scope.slugifyLabel = function(show) {
    return show.replace( / +/g, '-') .toLowerCase();
  };

  $scope.init = (function() {
    var label = $routeParams.label;
    $scope.getVideos(label);
  })();
}