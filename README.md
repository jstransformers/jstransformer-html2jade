# jstransformer-html2jade

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-html2jade.svg)](https://greenkeeper.io/)

[html2jade](https://github.com/donpark/html2jade) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-html2jade/master.svg)](https://travis-ci.org/jstransformers/jstransformer-html2jade)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-html2jade/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-html2jade)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-html2jade/master.svg)](http://david-dm.org/jstransformers/jstransformer-html2jade)
[![NPM version](https://img.shields.io/npm/v/jstransformer-html2jade.svg)](https://www.npmjs.org/package/jstransformer-html2jade)

## Installation

    npm install jstransformer-html2jade

## API

```js
var html2jade = require('jstransformer')(require('jstransformer-html2jade'));

var opts = {
  bodyless: true
};

html2jade.renderAsync('<p>Hello World</p>', opts)
.then(function (jade) {
  console.log(jade);
  //=> 'p Hello World'
});
```

## License

MIT
