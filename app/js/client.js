angular.module('chatApp', [])
  .controller('ChatAppController', function($scope) {
    var socket = io(); //Socketio object
    $scope.messages = [];

    //Used for sending chat message to the server
    $scope.sendMessage = function() {
      socket.emit('chat message', $scope.chatMessage);
      $scope.messages.push({"message": $scope.chatMessage});

      //Reset chat box to known state
      $scope.chatMessage = '';
    };

    //Resolve incoming message
    socket.on('chat message', function(message) {
      $scope.messages.push({"message": message})
      $scope.$apply()
    })
  });
