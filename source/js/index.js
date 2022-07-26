dayElement = document.querySelector('.preview-background-2');

document.addEventListener('mousemove', (e) => {
  dayElement.style.clipPath = `circle(200px at ${e.x / window.innerWidth * 100}% ${e.y / window.innerHeight * 100}%)`;
});