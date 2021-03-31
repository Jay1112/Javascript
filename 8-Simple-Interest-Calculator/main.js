// sliders
let Aslider = document.querySelector(".amount");
let Rslider = document.querySelector(".rate");
let Dslider = document.querySelector(".duration");

// labels
let Alabel = document.querySelector(".amount-class").children[0];
let Rlabel = document.querySelector(".rate-class").children[0];
let Dlabel = document.querySelector(".duration-class").children[0];

// output labels
let Ioutput = document.querySelector(".Interest-class").children[1];
let Toutput = document.querySelector(".total-class").children[1];
let Eoutput = document.querySelector(".EMI-class").children[1];

// event listeners
Aslider.addEventListener('input',()=>{
let value = Aslider.value;
Alabel.innerHTML = "Amount : $ " + value ;
calculate();
});

Rslider.addEventListener('input',()=>{
let value = Rslider.value;
Rlabel.innerHTML = "Rate : " + value + " % ";
calculate();
});

Dslider.addEventListener('input',()=>{
let value = Dslider.value;

if(value == 1){
Dlabel.innerHTML = "Duration : " + value + " year ";
}else{
Dlabel.innerHTML = "Duration : " + value + " years ";
}
calculate();
});

function calculate(){
let interest = Math.round(parseFloat((Aslider.value * Rslider.value * Dslider.value)/100));
let total = Math.round(parseFloat(Aslider.value) + parseFloat(interest));
let emi = Math.round(parseFloat(total/(Dslider.value*12)));

Ioutput.innerHTML = "$ " + interest ;
Toutput.innerHTML = "$ " + total ;
Eoutput.innerHTML = "$ " + emi ;
}
