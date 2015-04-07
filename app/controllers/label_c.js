var appModule = angular.module('complexTvApp'); 

appModule.controller("labelController",["$scope", "app_service", function($scope, app_service) {

  $scope.labels = [];
  $scope.shows = [];

  $scope.labelFilter = function(label) {
    label.name = label.name.toLowerCase();
    return label;
  };

  $scope.getLabels = function() {
    app_service.getLabels().then(function(response){
      $scope.labels = response.data;
    });
  };

  $scope.getShows = function() {
    app_service.getShows().then(function(response){
      $scope.shows = response.data.splice(0, 6);
    });
  };

  $scope.init = (function() {
   //$scope.getLabels();
    $scope.getShows();
  })();

}]);
