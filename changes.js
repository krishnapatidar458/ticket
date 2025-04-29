//let fare =  256;
//let source = "DR AMBEDKAR NGR";
//let source_hindi = "डॉ अंबेडकर नगर";
//let destination = "S.HIRDARAM";
//let destination_hindi = "";
//let via = "indb-ujn";
//let adult = 2;
//let child = 0;
//let train = "Express";
//let train_hindi = "एक्सप्रेस";
//let date = "11/10/2024";
//let time = "11:07";
//let number = "6232625599";
//let distance = "256";



let fare = 50;
let source = "UJJAIN JS";
let source_hindi = "";
let destination ="RATLAM JS";
let destination_hindi = "";
let via = "RTM";
let adult = 1;
let child = 0;
let train = "Express";
let train_hindi = "एक्सप्रेस";
let date = "29/04/2025";
let time = "10:48";
let number = "623825571";
let distance = "96";


// show.html
document.querySelector("#fare-1").innerHTML = fare;
document.querySelector("#source-1").innerHTML = source;
document.querySelector("#destination-1").innerHTML = destination;
document.querySelector("#via-1").innerHTML = via;
document.querySelector("#adult-1").innerHTML = adult;
document.querySelector("#child-1").innerHTML = child;
document.querySelector("#date-time-1").innerHTML = date+" "+time;
document.querySelector("#train-1").innerHTML = train;


// ticket.html 
document.querySelector("#date-1").innerHTML = date;
document.querySelector("#contact-no").innerHTML = number;
document.querySelector("#distance").innerHTML = distance;
document.querySelector("#source-hindi").innerHTML = source_hindi;
document.querySelector("#destination-hindi").innerHTML = destination_hindi;
document.querySelector("#train-hindi").innerHTML = train_hindi;
document.querySelector("#destination-2").innerHTML = destination;
