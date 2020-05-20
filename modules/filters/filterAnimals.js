'use strict';

module.exports = function (animalsToFilter, value) {
  return animalsToFilter.filter(animal => animal.name.includes(value));
};
