var fs = require('fs');
var mymodule = require('./mymodule')

var wpath = process.argv[2];
var wext = process.argv[3];

function log (err, data) {
  if (err) { console.log("Hubo un error " + err); return err }
  data.forEach(function (elem) { console.log(elem) });
  return data;
}

mymodule(wpath, wext, log);
