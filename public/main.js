function reveal() {
  const revealableContainers = document.querySelectorAll('.reveal-container');
  revealableContainers.forEach((container) => {
    const windowHeight = window.innerHeight;
    const elementTop = container.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) container.classList.add('active');
    else container.classList.remove('active');
  });
}

window.addEventListener('scroll', reveal);

function bruh() { window.scrollTo(0, 0); }
window.onload = bruh;
