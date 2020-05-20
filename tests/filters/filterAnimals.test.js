const { expect } = require('chai');

const filterAnimals = require('../../modules/filters/filterAnimals');

const animalsFixtures = [
  { name: 'Caracal' },
  { name: 'Anteater' },
  { name: 'Kiwa Hirsuta' },
  { name: 'Zooplankton' },
  { name: 'Tarantula' },
  { name: 'Oryx' },
];

describe('filterAnimals', () => {
  it('return relevant animals for value = "ry"', () => {
    const value = 'ry';
    const animals = filterAnimals(animalsFixtures, value);
    expect(animals).to.be.an('array');
    expect(animals.length).equal(1);
    expect(animals[0].name).equal('Oryx');
  });

  it('return relevant animals for value = "b"', () => {
    const value = 'b';
    const animals = filterAnimals(animalsFixtures, value);
    expect(animals).to.be.an('array');
    expect(animals.length).equal(0);
  });
});
