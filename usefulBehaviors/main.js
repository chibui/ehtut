var app = angular.module("behaviorApp", []);

// pass attributes(attrs) and link with the 'enter' event
app.directive("enter", function() {
  return function(scope, element, attrs) {
    element.bind("mouseenter", function() {
      element.addClass(attrs.enter);
    })
  }
})

app.directive("enter", function() {
  return function(scope, element, attrs) {
    element.bind("mouseleave", function() {
      element.removeClass(attrs.enter);
    })
  }
})