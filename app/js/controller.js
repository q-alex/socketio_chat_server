chatApp.
  controller('ChatAppController', ['chatsocket', function(chatsocket) {
    "use strict";

    var chatWindow = this; // Bind scope
    chatWindow.messages = []; // List of chat messages

    // Used for sending chat message to the server
    chatWindow.sendMessage = function() {
      chatsocket.emit('chat message', chatWindow.chatMessage);
      chatWindow.messages.push({"message": chatWindow.chatMessage});

      // Reset chat box to known state
      chatWindow.chatMessage = '';
    };

    // Resolve incoming message
    chatsocket.on('chat message', function(message) {
      chatWindow.messages.push({"message": message});
    });
  }]);
