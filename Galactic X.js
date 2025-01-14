document.addEventListener('mousemove', function (e) {
  const galaxy = document.querySelector('.galaxy');
  const stars = document.querySelector('.stars');

  const moveX = (e.clientX / window.innerWidth) * 30 - 15;
  const moveY = (e.clientY / window.innerHeight) * 30 - 15;

  if (galaxy) {
    galaxy.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }

  if (stars) {
    stars.style.transform = `translate(${moveX / 2}px, ${moveY / 2}px)`;
  }
});
