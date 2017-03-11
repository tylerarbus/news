angular.module('newsApp',[])

.directive('app', function(nytimes) {
  return {
    scope: {

    },
    controller: function() {
      this.results = ({results}) => {
        this.nytimesStories = results;
        console.log(results);
      };
      nytimes.fetch(this.results);
      this.hello = 'hello';
    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div>\
        <story-list nytimes-stories=ctrl.nytimesStories></story-list>\
      </div>'
  }
})