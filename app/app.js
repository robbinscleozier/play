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


complexTvApp.directive('dragToDismiss', function($drag, $parse, $timeout){
  return {
    restrict: 'A',
    compile: function(elem, attrs) {
      var dismissFn = $parse(attrs.dragToDismiss);
      return function(scope, elem, attrs){
        var dismiss = false;

        $drag.bind(elem, {
          constraint: {
            minX: 0, 
            minY: 0, 
            maxY: 0 
          },
          move: function(c) {
            if( c.left >= c.width / 4) {
              dismiss = true;
              elem.addClass('dismiss');
            } else {
              dismiss = false;
              elem.removeClass('dismiss');
            }
          },
          cancel: function(){
            elem.removeClass('dismiss');
          },
          end: function(c, undo, reset) {
            if (dismiss) {
              elem.addClass('dismitted');
              $timeout(function() { 
                scope.$apply(function() {
                  dismissFn(scope);  
                });
              }, 400);
            } else {
              reset();
            }
          }
        });
      };
    }
  };
});