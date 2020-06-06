'use strict';


$('#form').submit(function () {
  event.preventDefault();
  var miles = $('#miles').val()
  var gallons = $('#gallons').val();
  var sum = miles / gallons;
  $('#mpg').attr('value' , sum) 
})


