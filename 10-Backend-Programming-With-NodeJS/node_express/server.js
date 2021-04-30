// express
const express = require("express");

// create an app
const app = express();

app.get("/",(req,res)=>{
	// used to send the response
	// res.send("Hey There!"); 

	// send the file
	res.sendFile(__dirname + "/index.html");
});

app.get("/about",(req,res)=>{
	// used to send the file
	res.sendFile(__dirname + "/about.html");
});

// route with parameter
app.get("/username/:user_id",(req,res)=>{
	res.send("User ID : " + req.params.user_id);
});

// server port
app.listen(3000);