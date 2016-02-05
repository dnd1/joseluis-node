var http = require('http');
var map = require('through2-map');
var fs = require('fs');

var port = process.argv[2];

var server = http.createServer( function (req, res) {
  if(req.method != "POST") { return res.end("El request no es del tipo POST\n"); }
  req.pipe(map(function(chunk) { return chunk.toString().toUpperCase(); })).pipe(res);
});

server.listen(port);
