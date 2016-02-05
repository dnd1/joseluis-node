var fs = require('fs');

var countNewLines = function (buffer) {
  var count = 0;
  for(var i = 0; i < buffer.length; i++) {
    if(buffer[i] === '\n') {
      count++;
    }
  }

  return(count);
}

var readData = function (file, callback) {
  fs.readFile(file, 'utf8', function finishedReading(error, data) {
    console.log(callback(data));
  });
}

readData(process.argv[2], countNewLines);
