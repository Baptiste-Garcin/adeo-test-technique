'use strict';

const countElementsByKey = require('./countElementsByKey');

module.exports = function (args, data) {
  if (args.find(arg => arg.action === '--count')) {
    return countElementsByKey(data);
  }

  return data;
};
