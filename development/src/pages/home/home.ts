// to use custom svg, import if from js/ts code, then use it in markup
// e.g. <svg><use xlink:href="svg/sprite.svg#icon-cancel"></use></svg>
import '../../svgs/icon-cancel.svg';
import '../../svgs/icon-linkedin.svg';
import '../../svgs/icon-github.svg';
import '../../svgs/icon-gmail.svg';

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

(function () {
  const cssHome = document.createElement('Link') as HTMLAnchorElement;
  cssHome.href = 'css/home.css';
  cssHome.rel = 'stylesheet';
  cssHome.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(cssHome);
})();
