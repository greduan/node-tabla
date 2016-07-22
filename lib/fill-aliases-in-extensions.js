'use strict';

var clone = require('lodash/cloneDeep');

module.exports = function (exts) {
  exts = clone(exts);
  Object.keys(exts).forEach(function (key) {
    var ext = exts[key];

    if (typeof ext === 'object') {
      return;
    }

    if (typeof ext === 'string') {
      exts[key] = exts[ext];
    }
  });

  return exts;
};
