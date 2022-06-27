(function () {
  const cssBase = document.createElement('Link') as HTMLAnchorElement;
  cssBase.href = 'css/base.css';
  cssBase.rel = 'stylesheet';
  cssBase.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(cssBase);
})();
