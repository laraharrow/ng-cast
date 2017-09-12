angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },

  templateUrl: 'src/templates/videoList.html',

  controller: function($scope) {
    this.onClick = (idx) => {
      $scope.$emit('child', this.videos[idx]);
    };
  }
});
