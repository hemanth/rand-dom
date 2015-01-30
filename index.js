var newElement = require('new-element');
var elements = require('inline-elements')
               .concat(require('block-elements'))
               .concat(require('void-elements'));
var pickrand = require('pickrand');

module.exports = function(){
  var tag = pickrand(elements);
  var element = newElement('<' + tag + '/>');
  return {elm:element, tag:tag};
}
