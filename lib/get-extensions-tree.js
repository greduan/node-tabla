'use strict';

var defaultExts = require('./extensions').extensions;
var fillAliases = require('./fill-aliases-in-extensions');

var fileExtensionsRegex = /(\.\w*)/gi;

module.exports = function (exts) {
  var result = {};

  var exts = exts || defaultExts;
  exts = fillAliases(exts);

  Object.keys(exts).forEach(function (key) {
    var processor = exts[key];
    var split = key.match(fileExtensionsRegex).reverse();

    // Top-level not defined
    if (result[split[0]] == null) {
      result[split[0]] = {};
    }

    result[split[0]][split[1]] = processor;
  });

  return result;
};
