// Loader page functionality

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// MapQuest fucionality

window.onload = function() {
  L.mapquest.key = 'QTckBPKxhqVDwMiXwmIoXC1A4PZcAJ8h';

  var map = L.mapquest.map('map', {
    center: [40.7128, -74.0059],
    layers: L.mapquest.tileLayer('map'),
    zoom: 13
  });

  L.mapquest.directions().route({
    start: '350 5th Ave, New York, NY 10118',
    end: 'One Liberty Plaza, New York, NY 10006'
  });
}