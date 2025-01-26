// Effet clignotant pour le texte
const glitchText = document.querySelector('.glitch');
setInterval(() => {
  glitchText.style.opacity = glitchText.style.opacity === '1' ? '0.9' : '1';
}, 200);
