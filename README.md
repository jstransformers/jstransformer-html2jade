# jstransformer-html2jade [![The MIT License][license-img]][license-url]

<a href="http://github.com/jstransformers/jstransformer"><img src="https://cdn.rawgit.com/jstransformers/jstransformer/master/logo.svg" align="right" width="100px" height="100px" /></a>

[html2jade](https://github.com/donpark/html2jade) support for [JSTransformers][jstransformers-url].

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]


## Install
```
npm install jstransformer-html2jade --save
npm test
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var html2jade = require('jstransformer')(require('jstransformer-html2jade'));

var opts = {
  bodyless: true
};

console.log(html2jade.render('<p>Hello World</p>', opts).body);
//=> 'p Hello World'
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jstransformers/jstransformer-html2jade/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/jstransformer-html2jade
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-html2jade.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/jstransformers/jstransformer-html2jade
[travis-img]: https://img.shields.io/travis/jstransformers/jstransformer-html2jade.svg

[coveralls-url]: https://coveralls.io/r/jstransformers/jstransformer-html2jade
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/jstransformer-html2jade.svg

[david-url]: https://david-dm.org/jstransformers/jstransformer-html2jade
[david-img]: https://img.shields.io/david/jstransformers/jstransformer-html2jade.svg

[jstransformers-url]: http://github.com/jstransformers
