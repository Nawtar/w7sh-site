// The invite pages (/c/CODE, /i/CODE): show the code and point the button at the app.
(function () {
  var m = location.pathname.match(/^\/(c|i)\/([0-9A-Za-z]{4,12})\/?$/);
  if (!m) return;
  var code = m[2].toUpperCase();
  document.querySelectorAll('[data-code]').forEach(function (el) {
    el.textContent = code;
  });
  document.querySelectorAll('[data-open]').forEach(function (el) {
    el.setAttribute('href', 'w7sh://' + m[1] + '/' + code);
    el.hidden = false;
  });
})();
