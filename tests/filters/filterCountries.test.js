const { expect } = require('chai');

const filterCountries = require('../../modules/filters/filterCountries');

const countriesFixtures = [
  {
    name: 'Dillauti',
    people:
      [{
        name: 'Winifred Graham',
        animals:
            [{ name: 'Anoa' },
              { name: 'Duck' },
              { name: 'Narwhal' },
              { name: 'Badger' },
              { name: 'Cobra' },
              { name: 'Crow' }],
      }],
  },
  {
    name: 'Satanwi',
    people:
        [{
          name: 'Elmer Kinoshita',
          animals:
              [{ name: 'Weasel' },
                { name: 'Birds' },
                { name: 'Snakes' },
                { name: 'Anteater' },
                { name: 'Groundhog' },
                { name: 'Ant' },
                { name: 'Courser' }],
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
        }],
  },
];

describe('filterCountries', () => {
  it('return relevant countries for value = "ry"', () => {
    const value = 'ry';
    const filteredCountries = filterCountries(countriesFixtures, value);
    expect(filteredCountries).to.be.an('array');
    expect(filteredCountries.length).equal(1);
    expect(filteredCountries[0].name).equal('Satanwi');
  });

  it('return relevant countries for value = "b"', () => {
    const value = 'B';
    const filteredCountries = filterCountries(countriesFixtures, value);
    expect(filteredCountries).to.be.an('array');
    expect(filteredCountries.length).equal(2);
    expect(filteredCountries[1].name).equal('Satanwi');
    expect(filteredCountries[1].people.length).equal(1);
  });
});
