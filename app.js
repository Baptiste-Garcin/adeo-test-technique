'use strict';

const { data } = require('./data');
const argumentParser = require('./modules/parsers/argumentParser');
const filterCountries = require('./modules/filters/filterCountries');
const countElementsByKey = require('./modules/counter/countElementsByKey');

const [command, value] = argumentParser(process.argv);

if (command === '--filter') {
  const result = filterCountries(data, value);
  console.log(JSON.stringify(result, null, 2));
}

if (command === '--count') {
  const result = countElementsByKey(data);
  console.log(JSON.stringify(result, null, 2));
}
