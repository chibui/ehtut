var app = angular.module('myApp', []);
app.factory('Data', function () {
  return {message:"I'm data from a service"}
});

function FirstController($scope, Data) {
  $scope.data = Data;
}
function SecondController($scope, Data) {
  $scope.data = Data;
}