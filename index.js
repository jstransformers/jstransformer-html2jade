'use strict';

var Bluebird = require('bluebird');
var html2jade = require('html2jade');

exports.name = 'html2jade';
exports.inputFormats = ['html', 'html2jade'];
exports.outputFormat = 'jade';

exports.renderAsync = function (str, options) {
  options = options && typeof options === 'object' ? options : options;

  return new Bluebird(function (resolve, reject) {
    html2jade.convertHtml(str, options, function (err, jade) {
      if (err) {
        return reject(err);
      }
      return resolve(jade);
    });
  });
};
