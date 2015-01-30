## rand-dom

> Gives you a rand-dom.

```js
var randDom = require('rand-dom');
randDom.elm.innerHTML = `I'm a ${randDom}.tag`;
// Can decide your logic based on the tag.
document.body.appendChild(randDom.elm);
```
## API

*Basically it returns you an object that contains:*

```js
{
  elm // Random element that was created.
  tag // HTML Tag
}
```

## Install

```bash
$ npm install --save rand-dom
```
