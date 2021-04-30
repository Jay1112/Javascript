const express = require("express");
const mustacheExpress = require("mustache-express");
const mustache = mustacheExpress();
const bodyParser = require("body-parser");
const mysql = require("mysql");
mustache.cache = null;

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.engine("mustache",mustache);
app.set("view engine","mustache");


app.get("/students",(req,res)=>{
	const db = mysql.createConnection({
		host : "localhost",
		user : "root",
		password : "superuser",
		database : "expressdb",
	});

	db.connect((err)=>{
		const sql = "SELECT * FROM student";
		db.query(sql,(err,rows,fileds)=>{
			res.render("students",{"rows":rows});
		});
	});

});

app.get("/add",(req,res)=>{
	res.render("add");
});

app.post("/add",(req,res)=>{
	const db = mysql.createConnection({
		host : "localhost",
		user : "root",
		password : "superuser",
		database : "expressdb",
	});

	db.connect((err)=>{
		const sql = "INSERT INTO student (name,address) VALUES (?,?); ";
		const values = [req.body.name,req.body.address];

		db.query(sql,values);
		db.end();
		res.redirect("/students");
	});
});

app.post("/students/delete/:id",(req,res)=>{
	
	const db = mysql.createConnection({
		host : "localhost",
		user : "root",
		password : "superuser",
		database : "expressdb",
	});

	db.connect((err)=>{

		const sql = "DELETE FROM student WHERE id=?;";
		const values = [req.params.id];

		db.query(sql,values);

		res.redirect("/students/");

	});

});

app.get("/student/edit/:id",(req,res)=>{

	const db = mysql.createConnection({
		host : "localhost",
		user : "root",
		password : "superuser",
		database : "expressdb",
	});

	db.connect((err)=>{
		const sql = "SELECT * FROM student WHERE id=?;";
		const values = [req.params.id];

		db.query(sql,values,(err,rows,fileds)=>{
			console.log(rows[0]);
			res.render("edit",{"student":rows[0]});
		})
	});

});

app.post("/student/edit/:id",(req,res)=>{
	const db = mysql.createConnection({
		host : "localhost",
		user : "root",
		password : "superuser",
		database : "expressdb",
	});

	db.connect((err)=>{
		const sql = "UPDATE student SET name=?,address=? WHERE id=?;";
		const values = [req.body.name,req.body.address,req.params.id];

		db.query(sql,values,(err,rows,fileds)=>{
			res.redirect("/students/");
		});
	});
});

app.listen(3000);