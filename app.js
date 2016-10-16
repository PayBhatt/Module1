(function () {
  'use strict';

  angular.module('firstApp' [])

  .controller('myFirstController', function ($scope) {
    $scope.name = "Jack";
    $scope.saySomething = function () {
      return "hello";
    }

  });
})();
