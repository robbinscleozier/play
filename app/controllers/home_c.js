function homeController($scope, $rootScope, app_service) {

  $scope.popular = [];
  $scope.news = [];
  $scope.shows = [];

  $scope.getComplexNews = function() {
  	app_service.getComplexNews().then(function(response){
      $scope.news = response.data.data;
    });
  };	

  $scope.getPopularVideos = function() {
  	app_service.getPopularVideos().then(function(response){
      $scope.popular = response.data;
    });
  };

  $scope.getShows = function() {
    app_service.getShows().then(function(response){
      shows = response.data;
      $scope.shows = shows;
    });
  };

  $scope.init = (function() {
    $scope.getComplexNews();
    $scope.getShows();
    $scope.getPopularVideos();

    $scope.$on('showSliderComplete', function(scope, element, attrs){
      $('.showsSlider').bxSlider({
        slideWidth: 3000,
        minSlides: 2,
        maxSlides: 30,
        slideMargin: 2,
        autoStart: true,
        moveSlides: 1,
        pager: false,
        auto: true,
      });
     });
  })();
}