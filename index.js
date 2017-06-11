'use strict'

const html2jade = require('html2jade')

exports.name = 'html2jade'
exports.outputFormat = 'jade'

exports.renderAsync = function (str, options) {
  return new Promise((resolve, reject) => {
    html2jade.convertHtml(str, options, (err, jade) => {
      if (err) {
        reject(err)
      } else {
        resolve(jade)
      }
    })
  })
}
