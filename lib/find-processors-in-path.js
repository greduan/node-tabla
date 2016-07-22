'use strict';

var tree = require('./get-extensions-tree.js')();

var fileExtensionsRegex = /(\.\w*)/gi;

module.exports = function (path) {
  // We're assuming that the provided path always has a slash and that it's
  // always a file, we do not expect to get a directory
  var fileName = path.split('/').reverse()[0];
  var fileExts = fileName.match(fileExtensionsRegex).reverse();

  if (fileExts.length > 2) {
    throw new Error('We do not support multi-extension filenames yet');
  }

  var processors = [];

  if (tree[fileExts[0]][fileExts[1]] == null) {
    throw new Error('Undefined extension: ' + fileExts[1]);
  } else {
    processors.push(tree[fileExts[0]][fileExts[1]]);
  }

  return processors;
};
