var fs= require('fs')
 fs.readdir(process.argv[2], 'utf-8', function(err, list){
    if (err){
        throw new Error();
    }
    console.log(list)
 })


