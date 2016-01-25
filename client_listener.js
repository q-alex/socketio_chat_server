var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:3000');

ws.on('message', function(data, flags) {
    console.log(data);
});
