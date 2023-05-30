 // reveal
 function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    //  window.innerHeight will give us the height of the viewport.
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      // The variable, windowHeight is the height of the viewport, elementTop is the distance of the reveal element from the top of the viewpoint or, the length that has been scrolled, and elementVisible is the height at which the element should be revealed to the user.
      // You can determine when an element has scrolled a certain number of pixels into the page. Now define a function that displays the elements by adding and removing the active class. For this. use if and else statements. These will set the conditions for triggering the animation

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
    }
  }
  window.addEventListener("scroll",reveal);