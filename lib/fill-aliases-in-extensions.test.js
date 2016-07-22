'use strict';

var assert = require('assert');

var fillAliases = require('./fill-aliases-in-extensions');

var exts = {
  '.js.cs': {
    'command': 'coffee',
    'options': ['-s', '-p'],
  },
  '.js.coffee': '.js.cs',
};

module.exports = {
  'correct output': function () {
    var res = fillAliases(exts);

    assert.deepEqual(res['.js.cs'], exts['.js.cs']);
    assert.equal(res['.js.coffee'], res['.js.cs']);
  },
};
