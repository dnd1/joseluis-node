var http = require('http');
var bl = require('bl');
var url = process.argv[2];

function handleResponse(response) {
  response.pipe(new bl(function(err, data) {
    if(err) { console.log("Hubo un error " + err); return err };

    console.log(data.length);
    console.log(data.toString());
  }));
}

http.get(url, handleResponse);
