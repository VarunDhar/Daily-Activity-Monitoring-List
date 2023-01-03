const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine","ejs");

let items =["Wake up","Brush Teeth","Dress Up","Catch Bus"];

app.listen(3000,function(){
    console.log("Server is up and running at port 3000");
});

app.get('/', (req, res) => {
    // ** alternate way to get current day **
    // let currdate = new Date();
    // let currday = currdate.getDay();
    // let days= ["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur"];
    let options = {
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };

    let today = new Date();
    let dayToday = today.toLocaleDateString("en-US", options);
    res.render("list", {day: dayToday, tasks: items});

  });
app.post("/",function(req,res){

  let item = req.body.todo;
  items.push(item);
  res.redirect("/");

});





// const express = require("express");
// const app = express();
// const https = require("https");
// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({extended:true}));
// app.set('view engine', 'ejs');

// var items = [];

// app.listen("3000",function(){
//   //
// });

// app.get("/",function(req,res){

//   let date= new Date();
//   let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//   let today = date.toLocaleDateString("en-US", options);
//   res.render("list",{currday : today.substring(0,today.search(",")),list : items});
// });

// app.post("/",function(req,res){
//   var item = req.body.item;
//   items.push(item);
//   res.redirect("/");
// });