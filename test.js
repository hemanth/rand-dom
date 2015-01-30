var test = require('prova');
var randDom = require("./");

test('creates a random element', function (t) {
  reset();

  var el = randDom();
  t.equal(el.elm.length > 0, true);
  t.equal(typeof el, 'Object');
  t.end();
});

function reset () {
  document.body.innerHTML = '';
}
