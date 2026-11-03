const themeToggle = document.querySelector('#theme-toggle');

function updateButtonLabel(isNight) {
  themeToggle.textContent = isNight ? 'Switch to day theme' : 'Switch to night theme';
  themeToggle.setAttribute('aria-pressed', String(isNight));
}

if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    // toggle() adds the class if it is missing and removes it if it is present
    const isNight = document.body.classList.toggle('night');
    updateButtonLabel(isNight);
  });
}
