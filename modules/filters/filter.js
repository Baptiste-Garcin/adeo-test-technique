'use strict';

const filterCountries = require('./filterCountries');

module.exports = function (args, data) {
  if (args.find(arg => arg.action === '--filter')) {
    const { value } = args.find(arg => arg.action === '--filter');
    return filterCountries(data, value);
  }

  return data;
};
