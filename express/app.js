import express from "express";

const app=express();

app.get("/",(req,res)=>{
   return res.send("Hwllo peeW")
})

const PORT=3005;
app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`);
})