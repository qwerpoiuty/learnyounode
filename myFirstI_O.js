var fs = require('fs');
var count = 0;

var string = fs.readFileSync(process.argv[2]);
string = string.toString();
string = string.split("\n");


console.log(string.length -1)
