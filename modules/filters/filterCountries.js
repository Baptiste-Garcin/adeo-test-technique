'use strict';

const filterPeople = require('./filterPeople');

module.exports = function (countriesToFilter, value) {
  return countriesToFilter.reduce((acc, country) => {
    const relevantPeople = filterPeople(country.people, value);
    if (relevantPeople.length) {
      acc.push({ name: country.name, people: relevantPeople });
    }

    return acc;
  }, []);
};
