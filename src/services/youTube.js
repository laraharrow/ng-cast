angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(cb, query = 'acroyoga') {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      headers: {
        'Content-Type': 'application/json'
      },  
      params: {
        'key': window.YOUTUBE_API_KEY,
        'maxResults': 5,
        'part': 'snippet',
        'q': query,
        'type': 'video',
        'videoEmbeddable': 'true'
      }
    }).then(function successCallback(response) {
      cb(response.data.items);
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
  };
});
