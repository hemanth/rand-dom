var test = require('prova');
var randDom = require("./");

test('creates a random element', function (t) {
  reset();

  var el = randDom();
  
  t.equal(typeof el, 'object');
  t.equal(el.elm.toString().length > 1, true);
  
  t.end();
});

function reset () {
  document.body.innerHTML = '';
}
