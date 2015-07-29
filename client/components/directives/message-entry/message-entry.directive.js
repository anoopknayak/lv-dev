'use strict';

angular.module('lvApp')
  .directive('messageEntry', function () {
    return {
      templateUrl: 'components/directives/message-entry/message-entry.html',
      scope: {message: '='},
      restrict: 'EA',
      controller: function ($scope, $rootScope) {
        $scope.showFullMessage = $rootScope.showFullMessage
        if($scope.message.content.length > 30) $scope.moreContent = true;
      }
    };
  });
