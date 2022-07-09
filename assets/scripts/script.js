window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("myNavigation");
var sticky = navbar.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function dropdown() {
    var nav = document.getElementById("myDropNav");
    if (nav.className === "dropdown-nav") {
      nav.className += " responsive";
      } else {
          nav.className = "dropdown-nav";
      }
  }