function videoPlayController($scope, $routeParams, $rootScope, $sce, app_service) {

  $scope.createVideo = function(external_id) {
    $scope.contentId = external_id;
    $scope.iframe = "http://tvbeta.complex.com/tv/iframe?pId=556f8260656c47a4ab49bf6f2dde85f3&cId=" +  $scope.contentId + "&adSetCode=3f3b9e47c2954e21bdfb5618c47a61ea&site=complex&kw=";
    $scope.iframeSource = $sce.trustAsResourceUrl($scope.iframe);
  };

  $scope.init = (function() {
  	external_id = $routeParams.id;
    $scope.createVideo(external_id);
  })();
}