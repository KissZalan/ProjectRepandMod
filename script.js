const bg = document.querySelector('.bg-overlay');
window.addEventListener('scroll', () => {
  const scrolled = Math.min(window.scrollY / 1800, 1);
  bg.style.opacity = scrolled;
});

document.getElementById('read-page-btn').addEventListener('click', () => {
  const textToRead = document.body.innerText; // Takes ALL visible text
  const speech = new SpeechSynthesisUtterance(textToRead);

  const voices = speechSynthesis.getVoices();
  speech.voice = voices.find(v => v.lang === 'en-US') || voices[0];

  speech.rate = 1;   // speed (0.5 to slow down)
  speech.pitch = 1;  // tone
  speech.volume = 1; // 0–1

  speechSynthesis.speak(speech);
});
