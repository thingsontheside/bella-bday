// 🎵 Auto-play background music and interactions
window.addEventListener('DOMContentLoaded', () => {
  const song = document.getElementById('birthdaySong');
  song.volume = 0.5;

  // Mobile autoplay workaround
  document.body.addEventListener('click', () => {
    if (song.paused) {
      song.play();
    }
  });

  // 🎁 Gift Box Reveal
const giftBox = document.getElementById('giftBox');
const giftContent = document.getElementById('giftContent');

giftBox.addEventListener('click', () => {
  // Hide the gift box
  giftBox.style.display = 'none';

  // Show the surprise photo
  giftContent.style.display = 'block';
  giftContent.setAttribute('aria-hidden', 'false');

  // Create magical explosion particles
  createExplosion(giftBox);
});

// Keyboard accessibility
giftBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    giftBox.click();
  }
});

// Explosion function
function createExplosion(element) {
  const rect = element.getBoundingClientRect();
  const scrollX = window.pageXOffset;
  const scrollY = window.pageYOffset;
  const numParticles = 40;  // bigger burst
  const maxDistance = 150;  // bigger distance

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Cute magic colors
    const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ff85b3', '#f06292'];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Calculate center position relative to whole page (not viewport)
    const x = rect.left + rect.width / 2 + scrollX;
    const y = rect.top + rect.height / 2 + scrollY;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Random direction and distance
    const angle = Math.random() * 2 * Math.PI;
    const distance = maxDistance * Math.random();

    particle.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
    particle.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);

    document.body.appendChild(particle);

    particle.addEventListener('animationend', () => {
      particle.remove();
    });
  }
}


  // 💬 Live Chat Wishes
  const wishForm = document.getElementById('wishForm');
  const wishInput = document.getElementById('wishInput');
  const wishesContainer = document.getElementById('wishesContainer');

  wishForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = wishInput.value.trim();
    if (text.length === 0) return;

    createFloatingWish(text);
    wishInput.value = '';
  });

  function createFloatingWish(text) {
    const wish = document.createElement('div');
    wish.classList.add('wish');
    wish.textContent = text;

    // Random start position
    const containerWidth = wishesContainer.clientWidth;
    const x = Math.random() * (containerWidth - 100);
    wish.style.left = `${x}px`;
    wish.style.top = '180px';

    wishesContainer.appendChild(wish);

    // Animate and remove after 7 seconds
    setTimeout(() => {
      wish.remove();
    }, 7000);
  }
});

// ✨ Sparkle Trail
document.addEventListener('mousemove', (e) => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 500);
});

// 👗 Dress-up photo changer — move OUTSIDE DOMContentLoaded!
function changeOutfit(filename) {
  const img = document.getElementById('dressImage');
  img.src = 'images/outfits/' + filename;
}
