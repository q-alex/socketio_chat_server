var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 8080 });


var clients = [];

wss.on('connection', function connection(ws) {
  clients.push(ws);
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    for(var i = 0; i < clients.length; i++) {
      clients[i].send(message);
    }
  });
});
