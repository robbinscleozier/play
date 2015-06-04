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
    $scope.getLatestVideos();
    $scope.getFeaturedVideos();
    $scope.getPopularVideos();
    $scope.getComplexNews();
    $scope.getShows();

	  $scope.$on('popularSliderComplete', function(scope, element, attrs){
      $('.popularSlider').bxSlider({
        slideWidth: 4000,
        minSlides: 2,
        maxSlides: 8,
        slideMargin: 10,
        autoStart: true,
        pager: false,
        auto: true,
        autoDelay: 1000
      });
    });

    $scope.$on('featuredSliderComplete', function(scope, element, attrs){
      $('.featuredSlider').bxSlider({
        slideWidth: 4000,
        minSlides: 2,
        maxSlides: 8,
        slideMargin: 10,
        autoStart: true,
        pager: false,
        auto: true,
        autoDelay: 1500
      });
    });
  
    $scope.$on('latestSliderComplete', function(scope, element, attrs){
      $('.latestSlider').bxSlider({
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

	  $scope.$on('newsSliderComplete', function(scope, element, attrs){
      $('.newsSlider').bxSlider({
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