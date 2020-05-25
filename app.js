'use strict';

const { data } = require('./data');
const argumentParser = require('./modules/parsers/argumentParser');
const filter = require('./modules/filters/filter');
const countElements = require('./modules/counter/countElements');

const args = argumentParser(process.argv);

const filteredResults = filter(args, data);
const countedResults = countElements(args, filteredResults);

console.log(JSON.stringify(countedResults, null, 2));
