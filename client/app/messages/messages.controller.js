'use strict';

angular.module('lvApp')
  .controller('MessagesCtrl', function ($scope, $rootScope, Auth, Message) {
    $rootScope.currentUser= Auth.getCurrentUser();
    $scope.messages = [
      {
        from:{
          name: 'Manish Tiwari',
          email: 'bah@hasd.com',
          avatar: 'http://heintendsvictory.org/wp-content/uploads/default-avatar.png'
        },
        sentDate: Date(1288323623006),
        subject: 'How are you',
        content: 'I wanted to cancel with you regarding something which i can\'t figure out from the text given in the problem.'
      },
      {
        from:{
          name: 'Adsada Tiwari',
          email: 'bah@hasd.com',
          avatar: 'http://heintendsvictory.org/wp-content/uploads/default-avatar.png'
        },
        sentDate: Date(1288323623006),
        subject: 'How are you',
        content: 'I wanted to cancel with you regarding something which i can\'t figure out from the text given in the problem.'
      },
      {
        from:{
          name: 'Manish adsad',
          email: 'bah@hasd.com',
          avatar: 'http://heintendsvictory.org/wp-content/uploads/default-avatar.png'
        },
        sentDate: Date(1288323623006),
        subject: 'How are you',
        content: 'I wanted to cancel with you regarding something which i can\'t figure out from the text given in the problem.'
      }
    ]
    $scope.getMessages = function () {
      return Message.get().$promise.then(function (messages) {
        if(!messages || messages.length === 0) return [];
        var users = $rootScope.users;
        console.log('Users: ', users);
        for(var i=0; i<messages.length; i++){
          messages[i].from = _.find(users, {_id:messages[i].fromUser});
          messages[i].to = _.find(users, {_id:messages[i].fromUser});
        }
        $scope.messages = messages;
        console.log('messages: ', messages);
        return messages;
      })
    };
    $scope.getMessages();
    $rootScope.showFullMessage = function (message) {
      $scope.fullMessage = message;
      $scope.detailedView = true;
    }
  });
