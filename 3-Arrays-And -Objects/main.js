/*  Arrays  */

// Arrays are untyped because they can store any type of data
// Arrays are dynamic in JS because they can shrink and expand according the storage

	let fruits = ["Apple","Mango","Orange"];

	// print the array
	console.log(fruits);

	// access the array element
	console.log(fruits[1]);

	// more than one type of data stored in an array
	let mix = [1,1.5,-5,"string",true];
	console.log(mix);

	// length of the array
	console.log(mix.length);

/* Spread Operator  */ 

	let allFruits = ["Pineapple",...fruits,"Guava"];
	console.log(allFruits);

/*  For Of Loop  */ 

	for(let fruit of allFruits){
		console.log(fruit);
	}

/* Array Methods */

	// push :- Insert the data at the end of the array
	fruits.push("WaterMelon");
	console.log(fruits);

	// unshift :- Insert the data at the front of the array
	fruits.unshift("Roseapple");
	console.log(fruits);

	// pop :- delete the last element from the array
	let last_node = fruits.pop();
	console.log(last_node);
	console.log(fruits);

	// shift :- delete the first element from the array
	let first_node = fruits.shift();
	console.log(first_node);
	console.log(fruits);

/*  indexOf and Splice  */

	let index = fruits.indexOf("Mango");
	console.log(index);

	// splice method is used to remove particular portion of the array
	fruits.splice(index,2); // splice(start_index , no_of_elements);
	console.log(fruits);

/*  Array Concatenation */

	let part1 = [1,2,3];
	let part2 = [4,5,6];
	let part3 = [7,8,9];

	let allParts = part1.concat(part2).concat(part3);
	console.log(allParts);

/*  Reverse the Array */

	console.log(allFruits);
	allFruits.reverse();
	console.log(allFruits);

/*  Join method */

	let all_fruits_string = allFruits.join("-");
	console.log(all_fruits_string);

/*  Split Method */

	let names = "John|Tom|Jerry|Rob";
	names = names.split("|");
	console.log(names);

/*  Reverse the String */

	let message = "CheapThrills";
	message = message.split("").reverse().join("");
	console.log(message);

/*  Objects */

	var student = {
		name : "John",
		score : 95,
		subject : "Maths",
	};

	console.log(student);

	// access the properties of the student object
	console.log(student.name);
	console.log(student["score"]);

/*  Nesting Objects */

	let petrol_engine = {
		capacity : 2000,
		bhp : 299,
		torque : 450,
	};

	let car = {
		name : "ABC",
		price : 45000,
		engine : petrol_engine,
	};

	console.log(car);
	console.log(car.engine);
	console.log(car.engine.capacity);

/* Changing the Property */

	console.log(student.score);
	student.score = 99;
	console.log(student.score);


	console.log(student.subject);
	student["subject"] = "Physics";
	console.log(student.subject);

/* Avoiding property access */
	
	if(student.address){
		console.log(student.address);
	}else{
		console.log("Property doesn't exist.");
	}

	if(student.score){
		console.log(student.score);
	}else{
		console.log("Property doesn't exist.");
	}	

/*  Delete the Property */

	student["address"] = ".......xsxsx....."
	console.log(student.address);

	delete student.address ;

	if(student.address){
		console.log(student.address);
	}else{
		console.log("Property doesn't exist.");
	}	

/* Serializing  */

	// serializing is used to convert objects to the string type
	// so we can save the data in the database

	// converting object to string type
	let data = JSON.stringify(student);
	console.log(typeof(data));
	console.log(data);

	// converting string to the object
	let back = JSON.parse(data);
	console.log(typeof(back));
	console.log(back);