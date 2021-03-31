/* Object and Class */

class student{

// constructor is used to initialize the object when it is created.
constructor(id,name,marks){
this.id = id ;
this.name = name ;
this.marks = marks ;
}

// class - methods
display(){
console.log("---Student Details--- ");
console.log("Id : ",this.id);
console.log("Name : ",this.name);
console.log("marks : ",this.marks);
}
}

// objects
let stu1 = new student(1,"John",25);
let stu2 = new student(2,"Tom",28);

// call the display method
stu1.display();
stu2.display();

/* Inheritance */

class Parent{

constructor(lastName){
this.lastName = lastName ;
}

display(){
console.log("My Last name is " + this.lastName);
}
}

class Child extends Parent {
}

let child = new Child("Patel");
child.display();

/* Inheritance in practice */

class Member{
constructor(id,name){
this.id = id
this.name = name
}

display(){
console.log("----Details----");
console.log("Id : ",this.id);
console.log("Name : ",this.name);
}
}

class Student extends Member{
constructor(id,name,marks){
super(id,name);
this.marks = marks;
}

displayMarks(){
console.log("Marks : ",this.marks);
}
}

class Teacher extends Member{
constructor(id,name,exp){
super(id,name);
this.exp = exp;
}

displayExp(){
console.log("Experience : ",this.exp);
}
}

let newStudent1 = new Student(1,"Tom",99);
newStudent1.display();
newStudent1.displayMarks();

let newStudent2 = new Teacher(2,"Jerry",10);
newStudent2.display();
newStudent2.displayExp();

/* Constructor Function */

/*
function Employee(id,name,salary){
this.id = id;
this.name = name;
this.salary = salary;
this.display = function(){
console.log("Constructor Function");
console.log(this.id);
console.log(this.name);
console.log(this.salary);
}
}

let emp = new Employee(1,"Jack","50000");
emp.display();
*/

/* prototyping */

// this method creates the shared methods for all the objects which are belong to the same class
// it boosts the performance of the code while execution
// otherwise it creates the separate method for every object that we create.

function Employee(id,name,salary){
this.id = id;
this.name = name;
this.salary = salary;
}

Employee.prototype.display = function(){
console.log("Constructor Function");
console.log(this.id);
console.log(this.name);
console.log(this.salary);
}

let emp = new Employee(1,"Jack","50000");
emp.display();
