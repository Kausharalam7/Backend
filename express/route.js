import express from "express";
import path from "path";
const app=express();

const staticPath=path.join(import.meta.dirname,"public");

app.get("/product",(req,res)=>{
    console.log(req.query);
    res.send(`<h1> user search for product ${req.query.search} Page </h1> `)
})

app.use("/public",express.static(staticPath));
app.get("/profile/:username",(req,res)=>{
     console.log(req.params);
     res.send(` <h1>My username is ${req.params.username}</h1> `);
})

app.use("/public",express.static(staticPath));
app.get("/profile/:username/article/:slug",(req,res)=>{
    const formattedslug=req.params.slug.replace(/-/g," ");
     console.log(req.params);
     res.send(` <h1>Article ${req.params.username} by ${formattedslug} </h1> `);
})


const PORT=4000;
app.listen(PORT,()=>{
    console.log(`server start working at ${PORT}`)
})