function videoPlayController($scope, $routeParams, $rootScope, app_service) {

  $scope.videoPlayer = false;

  $scope.createVideo = function(external_id) {
    $scope.videoPlayer = OO.Player.create('playerwrapper', external_id,{
      height:'100%',
      width:'100%'
    });


    console.log("id: " + external_id);
    console.log($scope.videoPlayer);
  };

  $scope.init = (function() {

    if ($scope.videoPlayer != false) {
      $scope.videoPlayer.destroy();
    }

  	external_id = $routeParams.id;
    $scope.createVideo(external_id);
  })();
}