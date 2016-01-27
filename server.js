var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/app', express.static('app'));

app.get('/', function(request, response) {
  response.sendFile('client.html', {root: __dirname});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket) {
  console.log('A user connected');
  socket.on('disconnect', function() {
    console.log('A user disconnected');
  });

  socket.on('chat message', function(message) {
    console.log('message: ' + message);
    socket.broadcast.emit('chat message', message);
  });
});
