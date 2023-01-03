let express = require('express');
let app = express();
const filePath = __dirname + "/views/index.html";
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(filePath)
})

app.get("/json", (req, res) => {
  let response = "Hello json"
  if(process.env.MESSAGE_STYLE === "uppercase")response="HELLO JSON"
  res.json({ message: response })
})

app.get("/now",(req,res,next)=>{
  req.time = new Date().toString();
  next()
},(req,res)=>{
  res.json({time: req.time})
})
app.get("/:word/echo",(req,res,next)=>{
  const {word}=req.params;
  res.json({echo: word})
})
app.get("/name",(req,res,next)=>{
  const {first,last}=req.query;
  const name = `${first} ${last}`
  res.json({name})
})
app.post("/name",(req,res,next)=>{
  const {first,last}=req.body;
  const name = `${first} ${last}`
  res.json({name})
})





















module.exports = app;
