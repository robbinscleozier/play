complexTvApp.factory('app_service', ['$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    var api = serviceURL;

    self.makePost = function(endpoint, post) {
      return $http.get(api + endpoint)
    };

    self.getLastestVideos = function() {
      return self.makePost('videos/latest');
    };

    self.getFeaturedVideos = function() {
      return self.makePost('videos/featured')
    };

    self.getShows = function() {
      return self.makePost('shows');
    };

    self.getPopularVideos = function() {
      return self.makePost('videos/popular');
    };

    self.getLabels = function() {
      return self.makePost('labels/main');
    };

    self.getLastestVideosByLabel = function(label) {
     return self.makePost('labels/' + label +'/latest_videos');
    };

    self.getPopularVideosByLabel = function(label) {
      return self.makePost('labels/' + label +'/popular_videos');
    };

    self.getRelatedVideos = function(label) {
      return self.makePost('labels/' + label +'/popular_videos');
    };

    self.getComplexNews = function() {
      return self.makePost('tags/complex-news/latest');
    };

    return {
      
      getPopularVideos: function() {
        return self.getPopularVideos();
      },

      getLastestVideos: function() {
        return self.getLastestVideos();
      },

      getFeaturedVideos: function() {
        return self.getFeaturedVideos();
      },

      getShows: function() {
        return self.getShows();
      },

      getVideosByShow: function() {
        return self.getVideosByShow();
      },

      getLabels: function() {
        return self.getLabels();
      },

      getLastestVideosByLabel: function(label) {
        return self.getLastestVideosByLabel(label);
      },

      getPopularVideosByLabel: function(label) {
        return self.getPopularVideosByLabel(label);
      },

      getRelatedVideos: function() {
        return self.getRelatedVideos();
      },

      getComplexNews: function() {
        return self.getComplexNews();
      }
    };
  }
]);