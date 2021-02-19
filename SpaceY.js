  
  // Placeholder Comment

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  
  
  
  // Live Stream blink

  function blink() {
    var blinkText = document.getElementById("blink-text");
    setInterval(function(){
        blinkText.style.visibility = (blinkText.style.visibility == 'hidden' ? 'visible' : 'hidden'); // Use visibility instead of display so it always takes up space
    }, 500); // 0.5 seconds

}// Placeholder Comment