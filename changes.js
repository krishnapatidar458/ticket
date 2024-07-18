
let fare = 190;
let source = "RANI KAMALAPATI";
let source_hindi = "रानी कमलापति";
let destination = "REWA";
let destination_hindi = "रीवा";
let via = "bina-kte";
let adult = 1;
let child = 0;
let train = "superfast (s)";
let train_hindi = "सुपरफास्ट";
let date = "18/07/2024";
let time = "20:17";
let number = "8317856977";
let distance = "555";





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
