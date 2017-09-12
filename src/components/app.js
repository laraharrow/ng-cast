angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',

  controller: function($scope) {

    this.video = exampleVideoData[3] || video;
    this.videos = exampleVideoData; 

    $scope.$on('child', (event, data) => {
      this.video = data;
    });

    $scope.$on('searchquery', (event, data) => {
      // this.search = data;
      this.videos = this.ajaxSearchQuery(data);
      this.video = this.videos[0];
    });

    this.ajaxSearchQuery = () => {
      
    };
    
  }
  
});
