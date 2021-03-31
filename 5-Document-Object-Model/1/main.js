/* getElementById */

let heading = document.getElementById("heading");
console.log(heading);
console.log(heading.innerHTML);

heading.innerHTML = "Python is amazing";
console.log(heading.innerHTML);

/* getElementsByTagName */

let tag = document.getElementsByTagName("h2");
console.log(tag);

console.log(tag[0]);
console.log(tag[1]);

tag[0].innerHTML = "I am Learning Javascript";
tag[1].innerHTML = "I am Jay Patel";

console.log(tag[0]);
console.log(tag[1]);

/* getElementsByClassName */

let classes = document.getElementsByClassName("mytext");
console.log(classes);

console.log(classes[0].innerHTML);
console.log(classes[1].innerHTML);

classes[0].innerHTML = "yaha powri ho rahi hai";
classes[1].innerHTML = "This is a first paragraph";

console.log(classes[0].innerHTML);
console.log(classes[1].innerHTML);

/* querySelector */

tag = document.querySelector("h3");
console.log(tag);
console.log(tag.innerHTML);

classes = document.querySelector(".mydiv");
console.log(classes);
console.log(classes.innerHTML);

let myid = document.querySelector("#myid");
console.log(myid);
console.log(myid.innerHTML);

/* querySelectorAll */

classes = document.querySelectorAll(".newP");
console.log(classes);
console.log(classes[0].innerHTML);
console.log(classes[1].innerHTML);

/* innerText */

// innerText extracts the stuff without whitespaces
let inner_text = document.querySelector(".list_class");
console.log(inner_text.innerText);


/* textContent */

// textContent extracts the stuff with whitespaces
let text_content = document.querySelector(".list_class");
console.log(text_content.textContent);

/* Parent Node */

let child = document.querySelector('.header_class');
console.log(child.parentElement);

child = document.querySelector('.header_class').parentNode;
console.log(child);

/* Children */

let list = document.querySelector('.item-list');
console.log(list.firstElementChild);
console.log(list.lastElementChild);

let list_1 = list.childNodes;
console.log(list_1);

let list_2 = list.children;
console.log(list_2);
console.log(list.children[1]);

/* Siblings */

let first = list.firstElementChild;

do{
console.log(first);
first = first.nextElementSibling;
}while(first);
