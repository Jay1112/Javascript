// local storage

// setItem("key","value")
// getItem("key")
// removeItem("key")
// clear()        

/* Shopping Cart */

let cart = [];

if(localStorage.cart){
cart = JSON.parse(localStorage.cart);
}

let item = document.querySelector("#input-item");
let quan = document.querySelector("#input-quantity");
let price = document.querySelector("#input-price");
let add  = document.querySelector("#add");

add.addEventListener("click",()=>{

if(item.value === "" || quan.value === 0 ||
price.value == 0){
alert("Empty Field is not allowed.");
return ;
}else{

let newItem = {
Product : item.value,
Quantity : quan.value,
Price : price.value
};

for(let i in cart){

if(cart[i].Product === newItem.Product){
console.log("yes");
cart[i].Quantity = parseInt(cart[i].Quantity) + parseInt(newItem.Quantity);
localStorage.cart = JSON.stringify(cart);
location.reload();
return ;
}
}

cart.push(newItem);

localStorage.cart = JSON.stringify(cart);

item.value = "";
quan.value = 0 ;
price.value = 0;
}
displayItems();
});

function displayItems(){
let list = document.querySelector(".productList");
list.innerHTML = "";

for(let i in cart){
let newItem = cart[i] ;

let li = document.createElement("li");
li.innerHTML = "Product : " + newItem.Product + " | " +
"Quantity : " + newItem.Quantity + " | " + "Price : " +
newItem.Price ;

list.appendChild(li);
}
}

displayItems();