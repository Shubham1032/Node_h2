const express = require('express');
const app = express();
// const fs = require('fs');
// const path = require('path');

app.get("",(req,res)=> {
    res.send("I am on the homepage.")
    res.end();
})
app.get("/gallery",(req,res)=> {
    res.send("I am on gallery.")
    res.end();
})

app.post("/submit",(req,res)=>{
    res.send("Post worked")
    res.end();
});

app.listen(8000,()=>{
    console.log("Application is running")
})