'use strict';

const fs = require('fs');

module.exports = read;
// let AllErrs;

function read(array, callback) {

  let allErrs;
  let content = [];

  for (let i = 0; i < array.length; i++) {
    fs.readFile(array[i], (err, data) => {
      if (err) {
        allErrs = err;
      }
      else {
        content[i] = data;
      }

      if (allErrs) {
        callback(allErrs);
      } else if (i === array.length - 1) {
        setTimeout(function () {
          callback(undefined, content);
        }, 0);
      }
    });
  }


}
