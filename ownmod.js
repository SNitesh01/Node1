
exports.MyDateTime = function () {
    return Date();
  };

const fs = require('fs')
fs.readFile('index.html', function(err, data){
    if(err) throw err;
    console.log(data.toString())
})

fs.appendFile('index.html', 'heloo', function(err, file){
    if(err) throw err;
    console.log('created')
})

fs.open('index.html','w', function(err, file){
    if(err) throw err;
    console.log('saved')
})

fs.writeFile('index.html' ,'welcome node', function(err){
    if(err) throw err;
    console.log('saved')
})

fs.rename('index.html', 'inde.html', function(err){
    if(err) throw err;
    console.log('renamed')
})

 
  