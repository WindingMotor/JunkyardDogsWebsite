// Select all elements with the 'fade-in-section' class
const sections = document.querySelectorAll('.fade-in-section');

// Function to handle the intersection for each section
const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      // Stop observing after fading in to avoid unnecessary work
      observer.unobserve(entry.target);
    }
  });
};

// Set up an IntersectionObserver for each section
sections.forEach((section) => {
  const observer = new IntersectionObserver(handleIntersection);
  observer.observe(section);
});
