import express from "express";
import path from "path";
const app=express();

// app.get('/',(req,res)=> res.send("<h1> hello epxress</h1>"));
// app.get('/about', (req, res) => {
//   res.set('Cache-Control', 'no-store'); 
//   res.send("<h1>About Express</h1>");
// });

const response=await fetch("https://jsonplaceholder.typicode.com/todos/1");
const json=await response.json();
console.log(json);

const staticPath=path.join(import.meta.dirname,"public");
console.log(staticPath);
  app.use(express.static(staticPath));
app.get('/',(req,res)=>{
  // const fileName=new URL(import.meta.url);
  // console.log(fileName);
  // console.log(import.meta.url);  // filename
  // console.log(import.meta.dirname);


  //  const homepagePath=path.join(import.meta.dirname,"public","index.html");

  //  res.sendFile(homepagePath);
})

const PORT=3004;
// const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is ruuning at ${PORT}`);
})