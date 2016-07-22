'use strict';

var assert = require('assert');

var getTree = require('./get-extensions-tree');

var exts = {
  '.js.cs': {
    'command': 'coffee',
    'options': ['-s', '-p'],
  },
  '.js.coffee': '.js.cs',
};

module.exports = {
  'correct output with input': function () {
    var res = getTree(exts);

    assert.deepEqual(res['.cs']['.js'], exts['.js.cs']);
    assert.equal(res['.cs']['.js'], res['.coffee']['.js']);
  },

  'correct output without input': function () {
    var res = getTree();

    assert.equal(res['.cs']['.js'], res['.coffee']['.js']);
  },
};
