// Get users input
// Create functions to convert the value
// Call the function
// Get id for these values from html page -> Input new value in that id

var userValue = window.prompt("Enter the value to convert (number): ")
document.getElementById("userInput").innerText = userValue;
let input = document.getElementById("userInput").innerText

let lengthFeet = 0;
let lengthMeters = 0;
let volumeLiters = 0;
let volumeGallons = 0;
let massKilos = 0;
let massPounds = 0;

function calcValues() {
    lengthFeet = input * 3.281;
    lengthMeters = input * 0.3048;
    volumeLiters = input * 0.2641;
    volumeGallons = input * 3.785;
    massKilos = input * 2.205;
    massPounds = input / 2.205;
}

calcValues()

document.getElementById("lengthX").innerText = input + " meters = " + lengthFeet.toFixed(3) + " feet  | " + input + " feet = " + lengthMeters.toFixed(3) + " meters";
document.getElementById("volumeX").innerText = input + " liters = " + volumeLiters.toFixed(3) + " gallons  | " + input + " gallons = " + volumeGallons.toFixed(3) + " liters";
document.getElementById("massX").innerText = input + " kilos = " + massKilos.toFixed(3) + " pounds  | " + input + " pounds = " + massPounds.toFixed(3) + " kilos";
