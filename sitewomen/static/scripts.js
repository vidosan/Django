const link = document.getElementById('animatedLink');
let colorIndex = 0;
const colors = ['red', 'blue', 'green', 'yellow'];
setInterval(() => {
  link.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
}, 500); // Change color every 500ms
