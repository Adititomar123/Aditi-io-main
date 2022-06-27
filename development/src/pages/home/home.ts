// to use custom svg, import if from js/ts code, then use it in markup
// e.g. <svg><use xlink:href="svg/sprite.svg#icon-cancel"></use></svg>
import '../../svgs/icon-cancel.svg';
import '../../svgs/icon-linkedin.svg';
import '../../svgs/icon-github.svg';
import '../../svgs/icon-gmail.svg';
import '../../svgs/icon-theme.svg';

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
darkModeToggle?.addEventListener('click', () => {
  const setTheme = document.body;
  setTheme.classList.toggle('darkmode');
  let theme;
  if (setTheme.classList.contains('darkmode')) {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  localStorage.setItem('pageTheme', JSON.stringify(theme));
});
const getTheme = JSON.parse(localStorage.getItem('pageTheme')!);
if (getTheme === 'dark') {
  document.body.classList.add('darkmode');
}

//css lazy loading
(function () {
  const cssHome = document.createElement('Link') as HTMLAnchorElement;
  cssHome.href = 'css/home.css';
  cssHome.rel = 'stylesheet';
  cssHome.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(cssHome);
})();
