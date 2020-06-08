'use strict';

function handleSubmit() {
  // prevent the page from reloading when you click submit
  event.preventDefault();
  // getting values of the inputs 
  var miles = document.getElementById("miles").value;
  var gallons = document.getElementById("gallons").value;
  // calculating miles per gallon
  var milesPerGallon = miles / gallons;
  // output result of calculation to mpg field
  document.getElementById("mpg").value = milesPerGallon;
}