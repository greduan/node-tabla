'use strict';

var assert = require('assert');

var findProcessors = require('./find-processors-in-path');

module.exports = {
  'correct output': function () {
    var res = findProcessors('/tmp/ex.js.cs');

    assert.equal(res.length, 1);
    assert.notEqual(res[0].command, null);
    assert.notEqual(res[0].options, null);
  },
};
