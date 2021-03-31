/*  Functions  */

// definition
function welcomeUser(){
var name = "John";

console.log(`welcome ${name}`);
}

// function call
welcomeUser();

/* Pass the Paramtere */

function welcomeMessage(name){
console.log(`welcome ${name}`);
}

welcomeMessage("Jake");
welcomeMessage("kunna");

/* Return the value */

function areaOfCircle(radius){
return Math.PI * radius * radius ;
}

let area = areaOfCircle(100);
console.log(`Area of the cirlce is ${area}`);

/* Calculate the Percentage */

function totalMarks(phy,che,maths){
return (phy + che + maths);
}

function totalPercentage(marks){
return (marks*100)/300;
}

console.log(totalPercentage(totalMarks(94,95,100)));

/* Function Expression */

let heyThere = function(){
console.log("Hey There!");
}

heyThere();

let sum = function(a,b){
return a+b;
}

let answer = sum(30,20);
console.log(answer);

/* Arrow Functions */

// when we use arrow function we have to use const instead of let
const hello = () => {
console.log("Hello There");
}
hello();


const hi = () => {
return "Hi There";
}
console.log(hi());


const add = (a,b) => {
return a+b;
}
console.log(add(58,32));


const circle_area = r => Math.PI * r * r ;
console.log(circle_area(5));

/* Nested Functions */

function calAvg(a,b,c){

function calTotal(a,b,c){
return a+b+c;
}

let answer = calTotal(a,b,c)/3;

return answer;
}

console.log(calAvg(100,200,300));

/* Method */

// Method is also a function which is associated with an Object

let student = {
name : "John",
age : 20,
SayHi : function(){
console.log("I am Fine");
}
}

student.SayHi();

// this pointer use case
let school = {
name : "xyz",
area : 200,
SayHi : function(){
console.log(`Principal is ${this.name}`);
}
}

school.SayHi();

/* Hoisting  */

// JS takes all the declared variables and functions, stores
// them in stack. so we can call the function even before the
// function definition

displayName();

function displayName(){
console.log("I am calling...");
}

// Hoisting doesn't work for function expression

/* Function As Value */

function sayHii(){
console.log("Hiiiiiii......");
}

console.log(sayHii);

let hello_person = sayHii ;
hello_person();

function addition(a,b){
console.log(a+b);
}

let math = {
add : addition,
};

math.add(50,30);

/* Default Parameter */

  function addNumbers(a=0,b=0){
  console.log(a+b);
  }

  addNumbers();
  addNumbers(10);
  addNumbers(10,20);

 /* Lexical Scope  */

  // If variables inside the function scope are not present then
  // they will be picked up from the outside.

/*  CallBacks */

// callbacks are used to pass function as parameter to another function
function helloUser(){
console.log("Hello !");
}

function twice(fun){
fun();
fun();
}

twice(helloUser);