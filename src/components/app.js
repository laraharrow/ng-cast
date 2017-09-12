angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',

  controller: function() {
    this.currentVideo = exampleVideoData[0];
    this.videos = exampleVideoData; 
  }
  
});
