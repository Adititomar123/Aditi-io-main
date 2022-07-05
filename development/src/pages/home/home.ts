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
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle('lightmode');
    document.body.classList.remove('darkmode');
  }
});

//readmore

const media = window.matchMedia('(max-width: 700px)');

function render(e: any) {
  if (e.matches) {
    const classes = document.querySelectorAll('.specialclass');
    classes.forEach(specialclass => {
      const a = document.createElement('a');
      specialclass.appendChild(a).classList.add('readmore');
      const allist = specialclass.getElementsByTagName('li');
      for (let j = 1; j < allist.length; j++) {
        allist[j].style.display = 'none';
      }
    });

    const readbtns = document.querySelectorAll('.readmore');
    readbtns.forEach(readmore => {
      const olelement = readmore.parentNode as HTMLElement;
      const allist = olelement.getElementsByTagName('li');
      readmore.addEventListener('click', () => {
        olelement.classList.toggle('active');
        if (olelement.classList.contains('active')) {
          for (let j = 1; j < allist.length; j++) {
            allist[j].style.display = 'block';
          }
        } else {
          for (let j = 1; j < allist.length; j++) {
            allist[j].style.display = 'none';
          }
        }
      });
    });
  } else {
    const readelem = document.querySelectorAll('.readmore');
    readelem.forEach(readmore => {
      readmore.remove();
    });
    const olelems = document.querySelectorAll('.specialclass');
    olelems.forEach(specialclass => {
      const allist = specialclass.getElementsByTagName('li');
      for (let j = 0; j < allist.length; j++) {
        allist[j].style.display = 'block';
      }
    });
  }
}
render(media);

media.addEventListener('change', render);

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
