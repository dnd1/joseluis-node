var http = require('http');
var url = require('url');
var fs = require('fs');

var port = process.argv[2];

var server = http.createServer( function (req, res) {
  if(req.method != "GET") { return res.end("El request no es del tipo GET\n"); }
  var parsedUrl = url.parse(req.url, true);
  var time = new Date(parsedUrl.query.iso);
  var resjson = null;

  if(parsedUrl.pathname === '/api/parsetime') {
    resjson = JSON.stringify({ "hour": time.getHours(), "minute": time.getMinutes(), "second": time.getSeconds() });  
  } else if (parsedUrl.pathname === '/api/unixtime') {
    resjson =  JSON.stringify({ "unixtime": time.getTime() });
  } else {}
  
  if(resjson) {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(resjson);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);
