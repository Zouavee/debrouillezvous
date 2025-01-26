// Effet clignotant pour le texte principal
const glitchText = document.querySelector('.glitch');
setInterval(() => {
  glitchText.style.opacity = glitchText.style.opacity === '1' ? '0.8' : '1';
}, 500);
