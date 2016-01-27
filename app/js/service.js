//wrap the socket as a service so angular will update correctlyu
chatApp.
  factory('chatsocket', function($rootScope) {
    "use strict";

    var socket = io(); //create a socket and connect to server

    // Wrap functions to notify angular about updated data
    return {
      on: function(eventName, callback) {
        socket.on(eventName, function() {
          var args = arguments;
          $rootScope.$apply(function() {
            callback.apply(socket, args);
          });
        });
      },
      emit: function(eventName, data, callback) {
        socket.emit(eventName, data, function() {
          var args = arguments;
          $rootScope.$apply(function() {
            if(callback) {
              callback.apply(socket, args);
            }
          });
        });
      }
    };
  });
