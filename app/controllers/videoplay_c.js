function videoPlayController($scope, $routeParams, $rootScope, app_service) {

  $scope.videoInit = false;

  $scope.createVideo = function(external_id) {
  	OO.ready(function() {

  		jQuery("#player").remove();

  		jQuery('<div/>', {
		    id: 'player'
		}).appendTo('#playerwrapper');

	    $scope.videoPlayer = OO.Player.create('player', external_id,{
	      height:'100%',
	      width:'100%'
	    });
    });
  };

  $scope.init = (function() {

    if ($scope.videoInit == true) {
      $scope.videoPlayer.destroy();
      scope.$apply();
    }

  	external_id = $routeParams.id;
    $scope.createVideo(external_id);
    $scope.videoInit = true;
  })();
}