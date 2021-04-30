/* create Element & Document Fragment */

let fragment = new DocumentFragment();

let element = document.createElement('div');
element.innerHTML = "<h1> I am Jay Patel.</h1>";
fragment.appendChild(element);

let subheading = document.createElement('h2');
subheading.textContent = "This is a Subheading";
fragment.appendChild(subheading);

document.body.appendChild(fragment);

let listItem = document.createElement('li');
listItem.textContent = "Item 1";

let mylist = document.querySelector(".list-item");
mylist.appendChild(listItem);

/* Insert Before Method */

// parentNode.insertBefore(newNode,existingNode);
let parent = document.querySelector(".newList");
let child = parent.children[0];
let new_item = document.createElement("li");
new_item.textContent = "Soft Drink";

parent.insertBefore(new_item,child);

/* Append an Element */

// append can append multiple items at a time
// appenChild can append only one item at a time
let new_item1 = document.createElement("li");
new_item1.textContent = "Soda";

let new_item2 = document.createElement("li");
new_item2.textContent = "Mango Juice";

parent.append(new_item1,new_item2);

/* Prepend an Element */

let new_item3 = document.createElement("li");
new_item3.textContent = "Mango Delite";

let new_item4 = document.createElement("li");
new_item4.textContent = "Vanilla";

parent.prepend(new_item3,new_item4);

/* replace an element */

let new_node = document.createElement("li");
new_node.textContent = "replaced node";

let old_node = parent.children[0];

parent.replaceChild(new_node,old_node);

/* remove an element */

old_node = parent.children[2];

parent.removeChild(old_node);

/* Clone A Node */

// cloneNode(true) -> it clones node with its children
// cloneNode(false) -> it clones only the node not the children

node = document.querySelector(".newList");
let clonedNode = node.cloneNode(true);

document.body.appendChild(clonedNode);

/* accessing html attributes of html tags */

let heading = document.querySelector("h1");
console.log(heading.id);
console.log(heading.className);

/* set Attribute */

heading.setAttribute("id","newID");
console.log(heading.id);

// if attribure does not exist then it will be added
subheading = document.querySelector('h2');
console.log(subheading.id);
subheading.setAttribute("id","new_sub_id");
console.log(subheading.id);

/* hasAttribute and getAttribute */

if(heading.hasAttribute("id")){
console.log(heading.getAttribute("id"));
}else{
console.log("Attribute does not present");
}

if(heading.hasAttribute("style")){
console.log(heading.getAttribute("style"));
}else{
console.log("Attribute does not present");
}

/* Remove Attribute */

if(heading.hasAttribute("class")){
console.log(heading.getAttribute("class"));
}else{
console.log("Attribute does not present");
}

if(heading.hasAttribute("class")){
heading.removeAttribute("class");
}

if(heading.hasAttribute("class")){
console.log(heading.getAttribute("class"));
}else{
console.log("Attribute does not present");
}

/* Style Attribute */

// direct property access
heading.style.color = "red";

// cssText method
heading.style.cssText = "font-style:italic;";

// setAttribute method
heading.setAttribute("style","color:red;");

/* Manipulating Classes */

let cls = document.querySelector(".btn");
console.log(cls.className);
console.log(cls.classList);

// insert new class
cls.className += " primary";
console.log(cls);

// access to the class with index
console.log(cls.classList[1]);

// add a class
cls.classList.add("text-center");
console.log(cls);

// replace the class
cls.classList.replace("primary","secondary");
console.log(cls);

// remove the class
if(cls.classList.contains("secondary")){
cls.classList.remove("secondary");
}
console.log(cls);
