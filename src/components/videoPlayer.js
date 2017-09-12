angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<',
  },

  templateUrl: 'src/templates/videoPlayer.html',

  controller: function() {    
    this.srcUrl = (videoId) => {
      //console.log('videoId', this.video.id.videoId);
      return `https://www.youtube.com/embed/${this.video.id.videoId}`;
    };
  }
});
