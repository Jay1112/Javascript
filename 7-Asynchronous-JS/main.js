/* Asynchronous */

// synchronous means continuous
// Asynchronous means not continuous

/* Callbacks */

// setTimeout :- after n miliseconds it is executed
// setInterval :- it is executed in every n miliseconds
// clearInterval :- it stops the execution of setInterval function

counter = 0;

// setInterval
let timer = setInterval(function(){
console.log("setInterval is being called");
counter = counter + 1;

if(counter == 5){
clearInterval(timer);
}
},2000);

// setTimeout function
setTimeout(function(timer){
console.log("I am setTimeout function");
},3000);

/* Promise */

// Promise is an object and it is a result of
// an asynchronous computation

// initially promise is unknown so it can be either
// pending, rejected or fulfilled

// when the value of promise is ready, we can
// tell the promise to call a callback function

// pending
// rejected :- Error
// fulfilled :- callback function

let p = new Promise((resolve,reject)=>{
let status = false;

if(status){
resolve("Success");
}else{
reject("Failed");
}
});

p.then((message)=>{
console.log("Login : " + message);
}).catch((message)=>{
console.log("Login : " + message);
});

/* Callbacks and Promises */

/*
function transact(transactionID,time,callback){

setTimeout(()=>{
console.log("Transaction " + transactionID + " is completed.");
callback();
},time);
}

// the problem here is nesting hole
function allTransaction(){
transact(1,3000,()=>{
transact(2,1000,()=>{
transact(3,2000,()=>{

});
});
});
}

allTransaction();

*/

/* Promise Chaining  */
function transact(transactionID,time){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
console.log("Transaction " + transactionID + " is completed.");
resolve();
},time);
});
}

function allTransact(){
transact(1,3000)
.then(()=>transact(2,1000))
.then(()=>transact(3,2000));
}

allTransact();

/* Bank Transaction */
let balance = 1000 ;

function validate(){
let username = "admin";
let password = "admin";

return new Promise((resolve,reject)=>{
if(username==="admin" && password==="admin"){
resolve(balance);
}else{
reject("Invalid username and password");
}
});
}

function withdraw(){
let withdrawAmount = 800 ;

return new Promise((resolve,reject)=>{
if(withdrawAmount < balance){
balance = balance - withdrawAmount;
resolve(balance);
}else{
reject("Insufficient Amount");
}
});
}

validate()
.then((balance)=>{
withdraw()
.then((balance)=>{
console.log("Updated Balance : " + balance);
})
.catch((message)=>{
console.log(message);
})
})
.catch((message)=>{
console.log(message)
});

/* Async and Await */

// async function always returns promise
// await keyword is used to wait for fetching the stuff

async function fetchData(){
console.log("Inside the fetchData()");
const response = await fetch("https://api.github.com/users");
console.log("Before Response");
const users = await response.json();
console.log(users);

return users;
}

console.log("Before calling the fetchData()");
let dataPromise = fetchData();
console.log("After calling the fetchData()");
console.log(dataPromise);
dataPromise.then(data => console.log(data));
console.log("at the end of the file");
