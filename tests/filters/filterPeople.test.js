const { expect } = require('chai');

const filterPeople = require('../../modules/filters/filterPeople');

const peopleFixtures = [{
  name: 'Dennis Franci',
  animals:
      [{ name: 'Grouse' },
        { name: 'Hapuka' },
        { name: 'Cheetah' },
        { name: 'Donkey' },
        { name: 'Turkey' },
        { name: 'Carp' },
        { name: 'Octopus' },
        { name: 'Silkworm' },
        { name: 'Bearded Dragon' }],
},
{
  name: 'Anthony Bruno',
  animals:
      [{ name: 'Caracal' },
        { name: 'Anteater' },
        { name: 'Kiwa Hirsuta' },
        { name: 'Zooplankton' },
        { name: 'Tarantula' },
        { name: 'Oryx' }],
}];

describe('filterPeople', () => {
  it('return relevant people for value = "ry"', () => {
    const value = 'ry';
    const filteredPeople = filterPeople(peopleFixtures, value);
    expect(filteredPeople).to.be.an('array');
    expect(filteredPeople.length).equal(1);
    expect(filteredPeople[0].name).equal('Anthony Bruno');
  });

  it('return relevant people for value = "b"', () => {
    const value = 'B';
    const filteredPeople = filterPeople(peopleFixtures, value);
    expect(filteredPeople).to.be.an('array');
    expect(filteredPeople.length).equal(1);
    expect(filteredPeople[0].name).equal('Dennis Franci');
  });
});
