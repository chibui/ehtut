var app = angular.module("choreApp", []);

app.controller('ChoreCtrl', function($scope) {
  $scope.logChore = function(chore) {
    alert(chore + ' is done!');
  }
})

app.directive("kid", function() {
  return {
    restrict: "E",
    // creating isolate scope to keep the scope in context.
    // this will break interactions with controllers that wrap it, 
    // and cant invoke or bind to anything in the scope of that controller 
    scope: {
      done: "&" // passing in an expression which in this case maps to 'logChore'
    },
    // binding click of button to 'done' which is bound to 'logChore'
    template: '<input type="text" ng-model="chore">' +
    ' {{chore}} ' +
    // you need to pass in an object (object notation) that maps 'chore' to the 'chore' model in the input.
    '<div class="button" ng-click="done({chore:chore})">I\'m done!</div>'

  }
})