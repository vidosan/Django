const animatedLinks = document.querySelectorAll('.animatedLink');
animatedLinks.forEach((link, index) => {
  // Your animation code here.  This will run for each element with class 'animatedLink'
  link.style.opacity = 0; // Initial state (if needed)
  link.style.transition = "opacity 1s ease-in-out"; // Add transition for smooth animation

  // Calculate delay based on index
  const delay = index * 250; // 200ms delay between each element

  setTimeout(() => {
    link.style.opacity = 1;
  }, delay);
});