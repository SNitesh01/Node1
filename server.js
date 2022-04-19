const http = require('http')

//own module
http.createServer((req, res)=>{

   res.write('the date nd time :'+ dt.MyDateTime());
   res.end()
}).listen(4500)





// call back

http.createServer((req, res)=>{
   res.write("done")
   res.end()

}).listen(4000);


//regular function

function start(req, res){
   res.write('helooo')
   res.end()
}

http.createServer(start).listen(5000)

//aerrow function
  
const server = (req , res) => { 
   res.write('7009909')
   res.end();
 }

 http.createServer(server).listen(7000)



//server
http.createServer((req, res) => { 
   console.log(req.method);
   console.log(req.httpVersion)
   
   res.write('started')
   res.end()

 }).listen(3500, ()=> console.log('runing on 3500')) 
