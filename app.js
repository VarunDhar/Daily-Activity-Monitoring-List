const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
const date = require(__dirname + "/getDate.js");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine","ejs");

let items =["Wake up","Brush Teeth","Dress Up","Catch Bus"];
let workItems = ["Check Emails","Make Schedule"];
app.listen(3000,function(){
    console.log("Server is up and running at port 3000");
});

app.get('/', (req, res) => {

    res.render("list", {day: date.getDate(), tasks: items});

  });
app.post("/",function(req,res){

  let item = req.body.todo;
  items.push(item);
  res.redirect("/");

});


app.get("/work", (req, res) => {
  res.render("list", {day: "Work List", tasks: workItems});
});

app.post("/work",function(req,res){

  let item = req.body.todo;
  workItems.push(item);
  res.redirect("/work");

});

app.get("/about",(req,res)=>{
  res.render("about");
});

