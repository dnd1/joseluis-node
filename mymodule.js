var fs = require('fs');

var readandfilter = function(path, ext, callback) {
  fs.readdir(path, function (err, list) {
    if(err) return callback(err)
    
    var arr = [];
    for(var ind in list) {
      var file = list[ind];
      if(file.endsWith("." + ext)) {
        arr.push(file);
      }

    }

    callback(null, arr);
  });
}

module.exports = readandfilter;
