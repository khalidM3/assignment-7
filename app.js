'use strict';

function handleSubmit() {
  event.preventDefault();
  console.log('handleSubmit')
  var miles = document.getElementById("miles").value;
  var gallons = document.getElementById("gallons").value;
  var milesPerGallon = miles / gallons;
  document.getElementById("mpg").value = milesPerGallon;
  console.log(miles, gallons)
}