var prevScrollPos = window.scrollY;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.scrollY;
  var header = document.getElementById("header");
  
  if(currentScrollPos < 15){
    header.style.top = "0"
  }
  else if(prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = `-150px`;
  }
  
  prevScrollPos = currentScrollPos;
});
