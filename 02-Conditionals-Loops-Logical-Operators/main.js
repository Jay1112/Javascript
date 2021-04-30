/* Conditional Statements */

let num = 10 ; 

if(num > 0){
	console.log("Positive");
}else if(num < 0){
	console.log("Negative");
}else{
	console.log("zero");
}

num = -5 ;

if(num > 0){

	if(num % 2 == 0){
		console.log("Even Positive");
	}else{
		console.log("Odd Positive");
	}
}else if(num < 0){

	if(num % 2 == 1){
		console.log("Even Negative");
	}else{
		console.log("Odd Negative");
	}
}else{
	console.log("Zero");
}

/* Switch */
let day = 3 ;

switch(day)
{
	case 1 : console.log("Monday"); break;
	case 2 : console.log("Tuesday"); break;
	case 3 : console.log("Wednesday"); break;
	case 4 : console.log("Thursday"); break;
	case 5 : console.log("Friday"); break;
	case 6 : console.log("Saturday"); break;
	case 7 : console.log("Sunday"); break;

	default : console.log("Wrong input");
}

/* Logical AND Operator */

console.log("AND Operator : ");
console.log("T && T : ",true && true);
console.log("T && F : ",true && false);
console.log("F && T : ",false && true);
console.log("F && F : ",false && false);

/* Logical OR Operator */

console.log("OR Operator : ");
console.log("T || T : ",true || true);
console.log("T || F : ",true || false);
console.log("F || T : ",false || true);
console.log("F || F : ",false || false);

/* While Loop */

console.log("While Loop : ");

num = 0 ; 

while(num < 100){

	if(num % 5 == 0){
		console.log(num);
	}

	num++;
}

/* Do While Loop */

console.log("Do While Loop : ");

num = 100 ; 

do{
	if(num % 10 == 0){
		console.log(num);
	}
	num--;
}while(num > 0);

/* For Loop  */

console.log("For Loop : ");

for(let counter = 0;counter <= 10;counter++){

	console.log(counter);
}
