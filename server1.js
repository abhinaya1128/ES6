const express=require('express');
const app=express();

app.get("/getuser",(req,res)=>{
    res.send("welcome to getuser endpoint");
})
app.get("/getuser1",(req,res)=>{
    res.send("welcome to getuser1 endpoint");
})
app.post("/getuser2",(req,res)=>{
    res.send("welcome to postmethod");
})
app.put("/getuser3",(req,res)=>{
    res.send("welcome to put method");
})
app.delete("/getuser4",(req,res)=>{
    res.send("welcome to delete method");
})


app.listen(5500,()=>{
    console.log("My server is on port 5500");
})