const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

// public static path....
const static_path = (path.join(__dirname, "../public"));
app.use(express.static(static_path));

// routing....
app.get("",(req,res)=>{
  res.send("Hello World");
})

app.get("/about",(req,res)=>{
  res.send("About me");
})

app.get("/weather",(req,res)=>{
  res.send("Weather page");
})

app.get("*",(req,res)=>{
  res.send("404 Error");
})
app.listen(port,()=>{
  console.log(`listening to ${port}`)
})