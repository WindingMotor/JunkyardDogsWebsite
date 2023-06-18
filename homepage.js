var prevScrollPos = window.scrollY;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-80px"; // Adjust this value as needed
  }
  prevScrollPos = currentScrollPos;
});
