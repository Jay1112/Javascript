// Node.js is not a programming language
// Node.js is not a framework or not a library
// Node.js is a runtime JS environment, which is build on top of chrome's V8 Engine

// V8 engine converts the js code to machine code

/*
 Advantages of Node.js
	
	[1]. Now JS is used as fronend as well as backend side.
	[2]. Flexibility
	[3]. Scalability
.
 */

/* task - 1 */
// console.log("Hello World, I am learning Node Js");

/* task - 2 */
// function display(message){
// 	console.log(message);
// }

// display("Today I am a warrior.");

/* task - 3 */
// setTimeout(()=>{
// 	console.log("Login Successful.");
// },5000);

/* task - 4 */
// let ans = require("./myFunctions");
// ans(5);

/* task - 5 */
// let {calculateSquare, calculateCube} = require("./myFunctions");

// calculateSquare(5);
// calculateCube(5);

/* task - 6 */
// read file data
// const fs = require("fs");
// let fileContent = fs.readFileSync("demo.txt","utf8");
// console.log(fileContent);

/* task - 7 */
// write some info in demo.txt
// const fs = require("fs");
// fs.writeFileSync("demo.txt","IPL season 13 would be started on 9th July.");

/* task - 8 */
// const  fs = require("fs");
// fs.readFile("demo.txt","utf8",(error,data)=>{
// 	console.log(data);
// }); // used to make code execution in an asynchronous manner
// console.log("After the file read");

/* task - 9 */
// const  fs = require("fs");
// fs.writeFile("demo.txt","oh my god",(error)=>{
// 	console.log("data has been added to file");
// }); // used to make code execution in an asynchronous manner
// console.log("After the file read");

/* task - 10 */
// synchronous way to create directory
// const fs = require("fs");
// fs.mkdirSync("demo");

/* task - 11 */
// synchronous way to delete directory
// const fs = require("fs");
// fs.rmdirSync("demo");

/* task - 12 */
// asynchronous way to create directory
// const fs = require("fs");
// fs.mkdir("demo",()=>{
// 	console.log("directory is created.");
// });
// console.log("Happy Holi");

/* task - 13 */
// asynchronous way to delete directory
// const fs = require("fs");
// fs.rmdir("demo",()=>{
// 	console.log("directory is removed.");
// });
// console.log("Happy Holi");

/* task - 14 */
// create a Server 
// http = require("http");

// let server = http.createServer((req,res)=>{
// 	console.log(req.method);
// 	console.log(req.url);
// });

// server.listen(3000,"127.0.0.1");
// console.log("Server has started....");

/* task - 15 */
// send a response in plain text form
// http = require("http");

// let server = http.createServer((req,res)=>{
// 	res.setHeader('Content-type','text/plain');
// 	res.write("<h1>Hello World</h1>");
// 	res.end();
// });

// server.listen(3000,"127.0.0.1");
// console.log("Server has started....");

/* task - 16 */
// http = require("http");

// let server = http.createServer((req,res)=>{
// 	res.setHeader('Content-type','text/html');
// 	res.write("<h1>Hello World</h1>");
// 	res.end();
// });

// server.listen(3000,"127.0.0.1");
// console.log("Server has started....");

/* task - 17 */
// read-stream divides text into some chunks
// write-stream writes the data in the file chunk by chunk
// let fs = require("fs");
// let readStream = fs.createReadStream(__dirname + "/demo.txt");
// let writeStream = fs.createWriteStream(__dirname + "/sample.txt");
// let chunk_counter = 0;

// readStream.on("data",(chunk)=>{
// 	console.log(chunk.toString());
// 	writeStream.write(chunk);
// 	chunk_counter++;
// 	console.log("Chunk : " + chunk_counter)
// });

/* task - 18 */
// opening HTML document
// let fs = require("fs");
// let http = require("http");

// let server = http.createServer((req,res)=>{
// 	res.setHeader("Content-type","text-html");

// 	let readStream = fs.createReadStream(__dirname + "/index.html");
// 	readStream.pipe(res);
// });

// server.listen(3000,"127.0.0.1");
// console.log("Server has started...");

/* task - 19 */
// opening an HTML document
// let fs = require("fs");
// let http = require("http");

// let server = http.createServer((req,res)=>{
// 	res.setHeader("Content-type","text-html");

// 	fs.readFile("./index.html",(err,data)=>{
// 		res.write(data);
// 		res.end();
// 	});
// });

// server.listen(3000,"127.0.0.1");
// console.log("Server has started...");

/* task - 20 */
// sending JSON data
// let fs = require("fs");
// let http = require("http");

// let server = http.createServer((req,res)=>{
// 	res.setHeader("Content-type","application/json");

// 	let student = {
// 		name : "Jay",
// 		age : 20,
// 		roll : "C++ Game Developer",
// 	};

// 	res.write(JSON.stringify(student));
// 	res.end();
// });

// server.listen(3000,"127.0.0.1");
// console.log("Server has started...");

/* task - 21 */
// Routing in Node js
// let fs = require("fs");
// let http = require("http");

// let server = http.createServer((req,res)=>{
// 	if(req.url === "/home"){
// 		res.setHeader("Content-type","text-html");
// 		fs.readFile("./index.html",(error,data)=>{
// 			res.write(data);
// 			res.end();
// 		});
// 	}
// 	else if(req.url === "/about"){
// 		res.setHeader("Content-type","text-html");
// 		fs.readFile("./about.html",(error,data)=>{
// 			res.write(data);
// 			res.end();
// 		});		
// 	}else{
// 		res.setHeader("Content-type","text-html");
// 		fs.readFile("./error.html",(error,data)=>{
// 			res.write(data);
// 			res.end();
// 		});	
// 	}
// });

// server.listen(3000,"127.0.0.1");
// console.log("Server has started...");

/* Note :- problem in routing */
// this is a not good practice because we have to make a separate condition for every page 
// to set a route for it.

// solution for the above problem is Express.js which is framework of a Node.js and it 
// is used to handle routing stuff.








