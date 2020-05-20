'use strict';

module.exports = function (data) {
  return data.reduce((acc, country) => {
    const countedPeople = country.people.reduce((innerAcc, people) => {
      innerAcc.push({
        name: `${people.name} [${people.animals.length}]`,
        animals: people.animals,
      });
      return innerAcc;
    }, []);

    acc.push({
      name: `${country.name} [${countedPeople.length}]`,
      people: countedPeople,
    });

    return acc;
  }, []);
};
