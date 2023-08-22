var prevScrollPos = window.scrollY;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.scrollY;
  var header = document.getElementById("header");
  
  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = `-${header.clientHeight}px`;
  }
  
  prevScrollPos = currentScrollPos;
});
