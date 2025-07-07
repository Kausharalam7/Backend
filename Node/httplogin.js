// static file route

const http=require('http');
const fs=require('fs');
const path =require('path');

const indexpath=path.join(__dirname,'index.html');
const datapath=path.join(__dirname,'users.json');
const imagepath=path.join(__dirname,'asus.jpg')

const server=http.createServer((req,res)=>{
    if(req.url==='/login' && req.method==='GET'){
       fs.readFile(indexpath,(err,data)=>{
       if(err){ console.log(err); }
       else{
       //res.writeHead(200,{'content-type':'text/html'});
        res.writeHead(200,{'content-type':'text/html'});
    //  res.end('<h1>Server is running</h1> ')
       //res.end(data)
       // res.write(data) 
        res.end(data)
       }
   });
  
     
    }  else if(req.url==='/data' && req.method==="GET"){
                fs.readFile(datapath,(err,data)=>{
       if(err){ console.log(err); }
       else{
       //res.writeHead(200,{'content-type':'text/html'});
        res.writeHead(200,{'content-type':'text/json'});
    //  res.end('<h1>Server is running</h1> ')
       //res.end(data)
       // res.write(data) 
        res.end(data)
         }
        });
    }else if(req.url==='/image'){
     fs.readFile(imagepath,(err,data)=>{
       if(err){ console.log(err); }
       else{
       //res.writeHead(200,{'content-type':'text/html'});
        res.writeHead(200,{'content-type':'image/jpeg'});
    //  res.end('<h1>Server is running</h1> ')
       //res.end(data)
       // res.write(data) 
        res.end(data)
             }
        });
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.end('<h1>page not fount</h1>');
    }
       
   

    
})
    
const PORT=3001;
server.listen(PORT,"localhost",()=>{
    console.log(`server is listening at ${PORT}`)
})

