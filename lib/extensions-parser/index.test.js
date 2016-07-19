'use strict';

var assert = require('assert');

var parser = require('./index.js');

module.exports = {

  'returns empty array on normal file': function () {
    assert.deepEqual(parser('boop.bap'), []);
  },

  'returns correct array for normal input': function () {
    var exp = [
      { from: 'pug', to: 'hbs' },
      { from: 'hbs', to: 'html' },
    ];

    assert.deepEqual(parser('boop.html.hbs.pug'), exp);
  },

};
