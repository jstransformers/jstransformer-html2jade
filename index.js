'use strict';

var Bluebird = require('bluebird');
var convert = Bluebird.promisify(require('html2jade').convertHtml);

exports.name = 'html2jade';
exports.inputFormats = ['html', 'html2jade'];
exports.outputFormat = 'jade';

exports.renderAsync = function (str, options) {
  return convert(str, options);
};
