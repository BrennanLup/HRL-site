//Why-HRL
// FAQ code

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else { // calculates max-hieght for panel depending on screen size
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
