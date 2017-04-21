(function () {
  'use strict';

  angular.module('firstApp', [])

  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.inputValue = "";
    $scope.msg = "";
    $scope.displayMsg = function () {
      $scope.msg = countFoodItems($scope.inputValue);
    }
    function countFoodItems(foodItems) {
      if (foodItems == "") {
        return "Please enter data first!";
      }
      var arrayOfFoodItems = foodItems.split(",");
      for (var i = 0; i < arrayOfFoodItems.length; i++) {
        arrayOfFoodItems[i].trim();
        if (arrayOfFoodItems[i] == "") {
          arrayOfFoodItems.splice(i,1);
          i--;
        }
      }
      if (arrayOfFoodItems.length <= 3) {
        return "Enjoy!";
      } else {
          return "Too much food!";
      }
    }

  }
})();
