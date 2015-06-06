var complexTvApp = angular.module('complexTvApp', [ 
  'ngRoute',
  'mobile-angular-ui', 
  'mobile-angular-ui.gestures',
  'angular-loading-bar',
  ]).

config(['$routeProvider',
  function($routeProvider) {

    "use strict";

    $routeProvider.when('/', {
      templateUrl: 'app/views/home.html',
      controller: homeController
    }).

    when('/latest', {
      templateUrl: 'app/views/latest.html',
      controller: latestController
    }).

    when('/featured', {
      templateUrl: 'app/views/featured.html',
      controller: featuredController
    }).

    when('/popular', {
      templateUrl: 'app/views/popular.html',
      controller: popularController
    }).

    when('/shows', {
      templateUrl: 'app/views/shows.html',
      controller: showsController
    }).

    when('/show/:label', {
      templateUrl: 'app/views/show_view.html',
      controller: showViewController
    }).

    when('/videos/:label', {
      templateUrl: 'app/views/videos.html',
      controller: videoController
    }).

    when('/play/:id/:label', {
      templateUrl: 'app/views/play.html',
      controller: videoPlayController
    })

    .otherwise({redirectTo:'/'});
  }
]).
config(['$httpProvider', function ($httpProvider) {
  
  //Reset headers to avoid OPTIONS request (aka preflight)
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
}])
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.includeBar = true;
}]);

var appModule = angular.module('complexTvApp'); 

appModule.directive('relatedSliderComplete', function() {
  return function(scope, element, attrs) {
      if (scope.$last) setTimeout(function(){
          scope.$emit('relatedSliderComplete', element, attrs);
      }, 1);
  };
});

appModule.directive('showSliderComplete', function() {
  return function(scope, element, attrs) {
      if (scope.$last) setTimeout(function(){
          scope.$emit('showSliderComplete', element, attrs);
      }, 1);
  };
});