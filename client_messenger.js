var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:8080');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    ws.send(line);
})
