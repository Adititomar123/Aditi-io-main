// to use custom svg, import if from js/ts code, then use it in markup
// e.g. <svg><use xlink:href="#icon-cancel"></use></svg>
import '../../svgs/icon-cancel.svg';
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

//Lazy loading
window.addEventListener('DOMContentLoaded', event => {
  class customLink {
    href: string;
    rel: string;
    constructor(givenhref: string, givenrel: string) {
      this.href = givenhref;
      this.rel = givenrel;
      this.getLink();
    }
    getLink() {
      const cssLink: HTMLLinkElement = document.createElement(
        'Link'
      ) as HTMLLinkElement;
      cssLink.href = this.href;
      cssLink.rel = this.rel;
      document.head.appendChild(cssLink);
    }
  }

  const baseLink = new customLink('css/base.css', 'stylesheet');
  const homeLink = new customLink('css/home.css', 'stylesheet');
});
