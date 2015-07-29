'use strict';

angular.module('lvApp')
  .controller('ComposeCtrl', function ($scope, $rootScope, Auth, User, Message) {
    $rootScope.currentUser = Auth.getCurrentUser();
    User.getUsers().$promise.then(function (users) {
      console.log("got ", users);
      _.remove(users,{'email':$rootScope.currentUser.email});
      $rootScope.users = users;
    });
    $scope.newMessage = {};
    $scope.sendMessage = function (form) {
      $scope.emailFormSubmitted = true;
      if(form.$valid){
        console.log(form);
        var data = {
          fromUser: $rootScope.currentUser._id,
          toUser: $scope.newMessage.toName._id,
          content: $scope.newMessage.content,
          subject: $scope.newMessage.subject
        };
        console.log('Sending Message', data);
        Message.save(data).$promise.then(function (data) {
          console.log('Got back ', data);
          alert("Message sent");
        }, function(err){
          console.log(err);
          alert('Error');
        })
      }
    }
  });
