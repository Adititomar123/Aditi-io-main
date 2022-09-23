// to use custom svg, import if from js/ts code, then use it in markup
// e.g. <svg><use xlink:href="#icon-cancel"></use></svg
import '../../svgs/icon-linkedin.svg';
import '../../svgs/icon-github.svg';
import '../../svgs/icon-gmail.svg';
import '../../svgs/icon-theme.svg';

//download button loading
const downloadLink = document.getElementById('download_CV');
downloadLink?.addEventListener('click', function () {
  downloadLink?.classList.add('loader');
  setTimeout(() => {
    downloadLink?.classList.add('finished');
    downloadLink?.classList.remove('loader');
  }, 3000);
  setTimeout(() => {
    downloadLink?.classList.remove('finished');
  }, 4800);
});

//change theme
const darkModeToggle = document.querySelector('#theme-toggle');
const setTheme = document.body;

toggleThemeButtonListener();

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  darkModeListener();
}
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: light)').matches
) {
  lightModeListener();
}

function toggleThemeButtonListener() {
  darkModeToggle?.addEventListener('click', () => {
    const pressed = darkModeToggle!.getAttribute('aria-pressed') === 'true';

    if (!pressed) {
      darkModeListener();
    } else {
      lightModeListener();
    }
  });
}

function darkModeListener() {
  setTheme.classList.add('darkmode');
  darkModeToggle!.setAttribute('aria-label', 'dark mode is enabled');
  darkModeToggle!.setAttribute('aria-pressed', 'true');
}

function lightModeListener() {
  setTheme.classList.remove('darkmode');
  darkModeToggle!.setAttribute('aria-label', 'dark mode is disabled');
  darkModeToggle!.setAttribute('aria-pressed', 'false');
}
