const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.setHeader("Content-Type","text/html");
        res.write("<h1>I am vinod, ham gareeb hai lekin gaddar nhi</h1> i");
        res.end();
    }
     if(req.url ==="/source-code"){
        res.write("Great question! If you're asking how to increase the event count multiple times (like from 1 to 2, 3, 4...), you simply need to emit the same event multiple times. ");
        res.end();
    }
});

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`)
})