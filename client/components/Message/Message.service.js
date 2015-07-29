'use strict';

angular.module('lvApp')
  .factory('Message', function ($resource) {
    return $resource('/api/messages/:id/:controller', {
        id: '@_id'
      },
      {
        setRead: {
          method: 'POST',
          params: {
            controller:'read'
          }
        },
        get: {
          method: 'GET',
          isArray: true
        }
      });
  });
