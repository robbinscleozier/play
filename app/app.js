var complexTvApp = angular.module('complexTvApp', []).

config(['$routeProvider',
  function($routeProvider) {

    "use strict";

    $routeProvider.when('/', {
      templateUrl: 'app/views/home.html',
      controller: homeController
    }).

    when('/featured', {
      templateUrl: 'app/views/featured.html',
      controller: featuredController
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