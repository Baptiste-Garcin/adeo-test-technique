'use strict';

module.exports = function (data) {
  return data.map((country) => {
    const countedPeople = country.people.map(people => ({
      name: `${people.name} [${people.animals.length}]`,
      animals: people.animals,
    }));

    return {
      name: `${country.name} [${countedPeople.length}]`,
      people: countedPeople,
    };
  });
};
