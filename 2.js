var entry = process.argv;
var sum = 0;

for(var i = 2; i < entry.length; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);
