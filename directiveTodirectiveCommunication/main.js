var app = angular.module("superApp", []);

app.directive('superhero', function() {
  return {
    restrict: "E",
    // creates isolate scope for each superhero rather than replacing previous scope.
    // must have for reusable directives elements that add methods to the scope
    scope:{},
    // controller to build api that other directives can access
    controller: function($scope) {
      $scope.abilities = [];
      
      this.addStrength = function() {
        $scope.abilities.push('strength')
      }
      this.addSpeed = function() {
        $scope.abilities.push('speed')
      }
      this.addFlight = function() {
        $scope.abilities.push('flight')
      }
    },
    // links scope and element together
    link: function(scope, element) {
      // adds class of button(button is a foundation framework class)
      element.addClass('button');
      element.bind('mouseenter', function() {
        console.log(scope.abilities);
      })
    }
  }
});

app.directive('strength', function() {
  return {
    // calls superhero directive as a dependency
    require:'superhero',
    //creates link with superhero
    link: function(scope, element, attrs, superheroCtrl) {
      // now we have access to the superhero controller and the add.Strength method 
      superheroCtrl.addStrength();
    }
  }
})

app.directive('speed', function() {
  return {
    require:'superhero',
    link: function(scope, element, attrs, superheroCtrl) {
      superheroCtrl.addSpeed();
    }
  }
})

app.directive('flight', function() {
  return {
    require:'superhero',
    link: function(scope, element, attrs, superheroCtrl) {
      superheroCtrl.addFlight();
    }
  }
})