var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//this is used to allow ejs files to be read by express
app.set("view engine", "ejs");
//this will allow us to submit Post request and use them an JS objects
app.use(bodyParser.urlencoded({extended: true}));
//this will tell express to also serve the public folder when running
app.use(express.static("public"));

var friends = [];	

app.get("/", function(req, res){
	res.render("home");
});

app.get("/friends", function(req, res){

	res.render("friends", {friends:friends});
});

app.post("/addFriend", function(req, res){
	//npm install body-parser to have a request turn into a javascript object
	friends.push(req.body.newFriend);
	console.log(req.body.newFriend);
	res.redirect("/friends");
});

app.listen(3000, function(){
	console.log("Server Started");
});
