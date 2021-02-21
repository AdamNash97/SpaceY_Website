// Loader page functionality
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1000);
    showMap();
    showSlides();
    blink();
    dropdownToggle();


}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";


}

// Open top dropdown menu code

function dropdownToggle() {
    var dropdownTop = document.getElementById("dropdown-top");
    if (dropdownTop.style.display == "none") {
        dropdownTop.style.display = "block";
    }
    else {
        dropdownTop.style.display = "none";
    }
}

// Live stream blink

function blink() {
    var blinkText = document.getElementById("blink-text");
    setInterval(function(){
        blinkText.style.visibility = (blinkText.style.visibility == 'hidden' ? 'visible' : 'hidden'); // Use visibility instead of display so it always takes up space
    }, 500); // 0.5 seconds

}

// MapQuest fucionality

function showMap() {
    L.mapquest.key = 'QTckBPKxhqVDwMiXwmIoXC1A4PZcAJ8h';

    var map = L.mapquest.map('map', {
        center: [40.7128, -74.0059],
        layers: L.mapquest.tileLayer('map'),
        zoom: 10
    });

    L.mapquest.directions().route({
        start: '350 5th Ave, New York, NY 10118',
        end: 'One Liberty Plaza, New York, NY 10006'
    });
}


//Slideshow Javascript
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}