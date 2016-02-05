var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function (err, list) {
  for(var ind in list) {
    var file = list[ind];
    if(file.endsWith("." + ext)) {
      console.log(file);
    }
  }
});
