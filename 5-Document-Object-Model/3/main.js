/* onclick event */

function hello(){
console.log("hello");
}

/* Event Listener */
let counter = 0 ;

let element = document.querySelector(".event_class");

// add event listener
element.addEventListener('click',function(){
counter = counter + 1;
console.log(counter);
});

/* onmouse and mouse out events */

let element2 = document.querySelector(".events");

// add event listener
element2.addEventListener("mouseover",function(){
this.innerText = "onmouseover is triggered.";
this.style.color = "red";
});

element2.addEventListener("mouseout",function(){
this.innerText = "mouseout is triggered.";
this.style.color = "green";
});