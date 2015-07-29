'use strict';

angular.module('lvApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('compose', {
        url: '/compose-new-message',
        templateUrl: 'app/compose/compose.html',
        controller: 'ComposeCtrl'
      });
  });
