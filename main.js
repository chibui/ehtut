var myApp = angular.module('myApp', []);
myApp.factory('Data', function () {
  return {message:"I'm data from a service"}
});

myApp.filter('reverse', function (Data) {
  return function (text) {
    return text.split("").reverse().join("") + Data.message;
  }
})

function FirstController($scope, Data) {
  $scope.data = Data;
}
function SecondController($scope, Data) {
  $scope.data = Data;

  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join("");
  }
}

(function() {
    'use strict';

    angular
        .module('module')
        .controller('Controller', Controller);

    Controller.$inject = ['dependencies'];

    /* @ngInject */
    function Controller(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
        }
    }
})();