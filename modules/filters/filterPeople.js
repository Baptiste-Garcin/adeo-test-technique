'use strict';

const filterAnimals = require('./filterAnimals');

module.exports = function (peopleToFilter, value) {
  return peopleToFilter.reduce((acc, people) => {
    const relevantAnimals = filterAnimals(people.animals, value);
    if (relevantAnimals.length) {
      acc.push({ name: people.name, animals: relevantAnimals });
    }

    return acc;
  }, []);
};
