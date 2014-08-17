define(['./module'], function (module) {
  'use strict';

  module.controller('SignupCtrl', ['$scope', '$stateParams', 'Auth', function ($scope, $stateParams, Auth) {
    /**
     * Methods
     */

    $scope.register = function () {
      Auth.register($scope.fullName, $scope.email, $scope.password);
    };
  }]);
});
