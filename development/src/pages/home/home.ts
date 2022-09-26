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
darkModeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');
  document.body.classList.toggle('lightmode');
});

if (!document.body.classList.contains('darkmode')) {
  document.body.classList.add('lightmode');
}
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  document.body.classList.add('darkmode');
  document.body.classList.remove('lightmode');
}
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: light)').matches
) {
  document.body.classList.remove('darkmode');
  document.body.classList.add('lightmode');
}
//readmore
const x = window.matchMedia('(max-width: 700px)');
if (x.matches) {
  const classes = document.getElementsByClassName('specialclass');
  const classarr = Object.values(classes);
  for (const i in classarr) {
    const a = document.createElement('a');
    classarr[i].appendChild(a).classList.add('readmore');
  }
  const readbtns = document.querySelectorAll('.readmore');
  for (let i = 0; i < readbtns.length; i++) {
    const olelement = readbtns[i].parentNode as HTMLElement;
    const list = olelement.getElementsByTagName('li');
    const liarray = Object.values(list);
    liarray.shift();
    for (let j = 0; j < liarray.length; j++) {
      liarray[j].style.display = 'none';
    }
    readbtns[i].addEventListener('click', () => {
      olelement.classList.toggle('active');
      if (olelement.classList.contains('active')) {
        for (let j = 0; j < liarray.length; j++) {
          liarray[j].style.display = 'block';
        }
      } else {
        for (let j = 0; j < liarray.length; j++) {
          liarray[j].style.display = 'none';
        }
      }
    });
  }
}
//Lazy loading
// window.addEventListener('DOMContentLoaded', event => {
//   class CustomLink {
//     href: string;
//     rel: string;
//     constructor(givenhref: string, givenrel: string) {
//       this.href = givenhref;
//       this.rel = givenrel;
//       this.getLink();
//     }
//     getLink() {
//       const cssLink: HTMLLinkElement = document.createElement(
//         'Link'
//       ) as HTMLLinkElement;
//       cssLink.href = this.href;
//       cssLink.rel = this.rel;
//       console.log(cssLink);
//       document.head.appendChild(cssLink);
//     }
//   }
//   const baseLink = new CustomLink((<any>window).css, 'stylesheet');
// });
