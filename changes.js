let fare = 130;
let source = "indore";
let source_hindi = "इन्दौर";
let destination = "bhopal";
let destination_hindi = "भोपाल";
let via = "dewas";
let adult = 1;
let child = 0;
let train = "superfast (s)"
let train_hindi = "सुपरफास्ट)"
let date = "11/03/2024";
let time = "8:23"
let number = "6232625599"
let distance = "100"





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