//Unit 4 Portfolio with Object
// Class 1 
    // use JavaScript to create a simple object representation of your portfolio
// Class 2
    // create a data representation of your portfolio using nested objects
    // learn to access properties of an object using dot and bracket notation
    // use jquery to update your portfolio html (make sure to add appropriate class to your HTML
// Class 3
    // add like buttons to your html and like property to your object
    // add new properties, modify, and delete properties an object
    // update existing properties of an object
    // add a click handler to update the like counter when buton is clicked

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************


// Create your potrfolio object representation below







// Use Jquery to update your HTML using your object. Don't forget the Document Ready function. 







// Add your click handler below to update your like counters when the like buttons are clicked. 

$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});