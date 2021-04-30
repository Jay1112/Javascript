const mustacheExpress = require("mustache-express");
const mustache = mustacheExpress();
mustache.cache = null;

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.engine("mustache",mustache);
app.set("view engine","mustache");

app.get("/",(req,res)=>{
	let obj = {
		name : "Jay",
		age : 22,
		subjects : ["Maths","Chemistry","Physics"],
	}

	res.render("userprofile",{obj:obj});
});

app.get("/home",(req,res)=>{
	res.render("add_user");
});

app.post("/home",(req,res)=>{
	const obj = {
		name : req.body.name, 
	}
	res.send(obj.name);
});

// server port
app.listen(3000);
