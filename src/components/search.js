angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  
  bindings: {
    search: '<'
  },
  
  controller: function($scope) {
    this.search = '';
    this.result = () => {
      $scope.$emit('searchquery', this.search);
    };
  }
});
