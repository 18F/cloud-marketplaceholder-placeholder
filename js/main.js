(function(window) {
  document.body.addEventListener('click', function(e) {
    if (e.target.matches('aside h3 span')) {
      var prototypeEl = document.querySelector('#prototype');
      if (prototypeEl.matches('.open')) {
        return prototypeEl.classList.remove('open');
      }
      return prototypeEl.classList.add('open');
    }
  });
})(window);
