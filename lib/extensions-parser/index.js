'use strict';

module.exports = function (string) {
  var split = string.split('.');

  if (split.length === 2) {
    return [];
  }

  var reverse = split.reverse();
  reverse.pop();

  return reverse.reduce(function (rev, curr, i, arr) {
    var to = arr[i + 1];

    if (to == null) {
      return rev;
    } else {
      rev.push({
        from: curr,
        to: to,
      });
    }

    return rev;
  }, []);
};
