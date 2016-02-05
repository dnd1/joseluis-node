var http = require('http');
var bl = require('bl');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var countCall = 0;
var b1 = new bl();
var b2 = new bl();
var b3 = new bl();

function processResponse(response, buffer) {
  response.pipe(buffer);

  response.on("end", function () {
    countCall++;
    if(countCall === 3) {
      console.log(b1.toString());
      console.log(b2.toString());
      console.log(b3.toString());
    }
  });
}

http.get(url1, function (response) { processResponse(response, b1); });
http.get(url2, function (response) { processResponse(response, b2); });
http.get(url3, function (response) { processResponse(response, b3); });
