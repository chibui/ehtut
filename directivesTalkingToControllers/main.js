var app = angular.module("twitterApp", []);

app.controller("AppCtrl", function($scope) {
  $scope.loadMoreTweets = function() {
    alert('Loading tweets');
  }
  $scope.deleteTweets = function() {
    alert('Deleting tweets');
  }
})

// passing in attributes(attrs) here and binding the deleteTweets function in the view allows us to reuse this method. 
app.directive('enter', function() {
  return function(scope, element, attrs) {
    element.bind("mouseenter", function() {
      scope.$apply(attrs.enter);
    })
  }
})