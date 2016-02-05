var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]).toString();

var count = 0;

for(var i = 0; i < buffer.length; i++) {
  if(buffer[i] === '\n') {
    count++;
  }
}

console.log(count);
