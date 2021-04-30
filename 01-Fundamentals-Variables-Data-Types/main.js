/* console */ 
console.log("Hello World");

/* Arithmetic Operator */
console.log(20 + 6);
console.log(20 - 6);
console.log(20 * 6);
console.log(20 / 6);
console.log(20 % 6);
console.log(20 ** 6);

/* Variables */

let marks   ; // declaration
marks = 100 ; // initialization
console.log(marks);

let name = "John";
console.log(name);

/* Data-Types  */

let mark = 20 ; // integer 
let fname  = "Tom"  ; // string
let score = 40.56  ; // float
let isEmpty = true ; // boolean


console.log("10" + "20"); // concatenation

/* Difference between let and const  */
// we can change the value of the let but we can't change the value of const
// we have to initialize the value when we declare the const variable,but it is not necessary.


/* Math Object */

	// PI value object
	const PI = Math.PI ; 
	console.log(PI);

	// absolute 
	let num = -10 ;
	console.log(Math.abs(num));

	// pow operator
	console.log(Math.pow(10,4));

	// round off 
	console.log(Math.round(1.8));
	console.log(Math.round(1.4));

	// floor and ceil function
	console.log(Math.floor(1.5));
	console.log(Math.ceil(1.5));

	// random function
	let random_num = Math.random();
	console.log(random_num);

	// max function
	console.log(Math.max(100,200,230));
	console.log(Math.min(100,200,230));

/* String Method */

	// concatenation
	let first_name = "John" ; 
	let last_name = "Ford" ;
	let full_name = first_name + " " + last_name ;
	console.log(full_name);

	// length of the string
	console.log(full_name.length);

	// convert to upper case
	full_name = full_name.toUpperCase();
	console.log(full_name);

	// convert to lower case
	full_name = full_name.toLowerCase();
	console.log(full_name);

	// replace somethinf with something
	full_name = full_name.replace("j","r");
	console.log(full_name);

	/* string indexing */
	name = "My name is XYZ";
	console.log(name[0]);
	console.log(name[1]);

	let a = "Computer";
	console.log(a.substring(1,4));
	console.log(a.slice(1,4));

	let names = "John,Rob,Tim,Newton";
	let nameArray = names.split(",");
	console.log(nameArray);

	//  string template literal
	let temp = `Apple`;
	let b = `My favourite fruit is ${temp}`;
	console.log(b);

/* Equality Operator  */

//   ==  -> it checks the values 
//   === -> it checks the values and data-types 

console.log(2 == 2);
console.log(2 == "2");
console.log(2 === 2);
console.log(2 === "2");

/* Comparision Operator */
console.log(20 > 10);
console.log(20 < 10);
console.log(20 >= 10);
console.log(20 <= 10);

console.log(2 != 2);
console.log(2 != "2");
console.log(2 !== 2);
console.log(2 !== "2");

/* Type Conversion */
a = "Apple";
console.log(typeof(a));

a = 10 ;
console.log(typeof(a));

let salary = "1000" ;  // string variable
console.log(typeof(salary));

salary = parseInt(salary); // converted to number
console.log(typeof(salary));

// this is a single line comment

/*

 This is multi line comments notation

*/
