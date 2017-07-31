var fs = require('fs');
var source=fs.readFileSync(process.argv[2]);
var str = source.toString()
var final=str.split('\n')
var final1 = final.length-1
console.log(final1)