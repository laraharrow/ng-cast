angular.module('video-player')
.component('videoList', {
  bindings: {
    onClick: '<',
    videos: '<',
    video: '<'
  },

  templateUrl: 'src/templates/videoList.html',

  controller: function() {
    this.onClick = (idx) => {
      this.video = videos[idx];
    };
  }
});
