const hamburgerButton = document.getElementById('hamburger-button');
const navigationLinks = document.getElementById('navigation-links');

hamburgerButton.addEventListener('click', () => {
  navigationLinks.classList.toggle('hidden');
});
