function reveal() {
    var revealsLeft = document.querySelectorAll(".reveal-left");
    var revealsRight = document.querySelectorAll(".reveal-right");
    for (var i = 0; i < revealsLeft.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealsLeft[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        revealsLeft[i].classList.add("actives");
      } else {
        revealsLeft[i].classList.remove("actives");
      }
    }

    for (var i = 0; i < revealsRight.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsRight[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          revealsRight[i].classList.add("actives");
        } else {
          revealsRight[i].classList.remove("actives");
        }
      }

  }
  
  window.addEventListener("scroll", reveal);


