function videoPlayController($scope, $routeParams, $rootScope, $sce, app_service) {

  $scope.createVideo = function(external_id) {
    $scope.contentId = external_id;
    $scope.iframe = "http://player.complex.com/tv/iframe?pId=556f8260656c47a4ab49bf6f2dde85f3&cId=" +  $scope.contentId + "&adSetCode=3f3b9e47c2954e21bdfb5618c47a61ea&site=complex&kw=";
    $scope.iframeSource = $sce.trustAsResourceUrl($scope.iframe);
  };

  $scope.getRelatedVideos = function() {
    app_service.getLastestVideosByLabel($routeParams.label).then(function(response){
      $scope.relatedVideos =  self.shufflearray(response.data.data);
    });
  };

   self.shufflearray = function(videos) {
    var counter = videos.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      temp = videos[counter];
      videos[counter] = videos[index];
      videos[index] = temp;
    }

    return videos;
  };

  $scope.init = (function() {

    external_id = $routeParams.id;
    $scope.createVideo(external_id);
    $scope.getRelatedVideos();

    $scope.$on('relatedSliderComplete', function(scope, element, attrs){
      $('.relatedVideosSlider').bxSlider({
        slideWidth: 4000,
        minSlides: 2,
        maxSlides: 8,
        slideMargin: 10,
        autoStart: true,
        pager: false,
        auto: true,
        autoDelay: 2000
      });
    });
  })();
}