var net = require('net');
var time = require('strftime');
var port = process.argv[2];

var server = net.createServer( function (socket) {
  socket.write(time('%Y-%m-%d %H:%M\n'));
  socket.end();
});

server.listen(port);
