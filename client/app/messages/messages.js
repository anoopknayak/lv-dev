'use strict';

angular.module('lvApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('messages', {
        url: '/messages',
        templateUrl: 'app/messages/messages.html',
        controller: 'MessagesCtrl'
      });
  });