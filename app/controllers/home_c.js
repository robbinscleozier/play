function homeController($scope, $rootScope, app_service) {

  $scope.latest = [];
  $scope.popular = [];
  $scope.featured = [];
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

  $scope.getLatestVideos = function() {
    app_service.getLastestVideos().then(function(response){
      $scope.latest = response.data;
    });
  };

  $scope.getFeaturedVideos = function() {
    app_service.getFeaturedVideos().then(function(response){
      $scope.featured = response.data;
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

    $scope.$on('showSliderComplete', function(scope, element, attrs){
      $('.showsSlider').bxSlider({
        slideWidth: 4000,
        minSlides: 2,
        maxSlides: 30,
        slideMargin: 10,
        autoStart: true,
        pager: false,
        auto: false,
      });
     });
  })();
}