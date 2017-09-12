angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',

  controller: function($scope, youTube) {

    this.youTube = youTube;

    this.searchResults = (data) => {
      this.videos = data;
      this.video = data[0];
    };

    youTube.search(this.searchResults);

    $scope.$on('child', (event, video) => {
      this.video = video;
    });

    $scope.$on('searchquery', (event, query) => {
      this.videos = youTube.search(this.searchResults, query);
      this.video = this.videos[0];
    });

  }
  
});
