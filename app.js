var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];	

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
