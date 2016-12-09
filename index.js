'use strict'

var Promise = require('promise')
var html2jade = require('html2jade')

exports.name = 'html2jade'
exports.inputFormats = ['html', 'html2jade']
exports.outputFormat = 'jade'

exports.renderAsync = function (str, options) {
  return new Promise(function (resolve, reject) {
    html2jade.convertHtml(str, options, function (err, jade) {
      if (err) {
        reject(err)
      } else {
        resolve(jade)
      }
    })
  })
}
