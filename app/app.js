var complexTvApp = angular.module('complexTvApp', [ 
  'ngRoute',
  'mobile-angular-ui', 
  'mobile-angular-ui.gestures'
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

    when('/shows', {
      templateUrl: 'app/views/shows.html',
      controller: showsController
    }).

    when('/videos/:label', {
      templateUrl: 'app/views/videos.html',
      controller: videoController
    }).

    when('/play/:id', {
      templateUrl: 'app/views/play.html',
      controller: videoPlayController
    })

    .otherwise({redirectTo:'/home'});
  }
]).
config(['$httpProvider', function ($httpProvider) {
  //Reset headers to avoid OPTIONS request (aka preflight)
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
}]);

var appModule = angular.module('complexTvApp'); 

appModule.directive('popularSliderComplete', function() {
  return function(scope, element, attrs) {
      if (scope.$last) setTimeout(function(){
          scope.$emit('popularSliderComplete', element, attrs);
      }, 1);
  };
});

appModule.directive('featuredSliderComplete', function() {
  return function(scope, element, attrs) {
      if (scope.$last) setTimeout(function(){
          scope.$emit('featuredSliderComplete', element, attrs);
      }, 1);
  };
});

appModule.directive('latestSliderComplete', function() {
  return function(scope, element, attrs) {
      if (scope.$last) setTimeout(function(){
          scope.$emit('latestSliderComplete', element, attrs);
      }, 1);
  };
});

appModule.directive('newsSliderComplete', function() {
  return function(scope, element, attrs) {
      if (scope.$last) setTimeout(function(){
          scope.$emit('newsSliderComplete', element, attrs);
      }, 1);
  };
});
