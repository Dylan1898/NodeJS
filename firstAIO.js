var fs= require('fs')
 fs.readFile(process.argv[2], 'utf-8', function(err, sucess){
    if (err){
        throw new Error();
    }
    console.log(sucess.split('\n').length-1)
 })


