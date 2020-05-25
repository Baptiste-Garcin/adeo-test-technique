const { expect } = require('chai');

const filter = require('../../modules/filters/filter');


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

describe('filter', () => {
  it('return relevant results for value = "ry"', () => {
    const args = [{ action: '--filter', value: 'ry' }];
    const filteredCountries = filter(args, countriesFixtures);
    expect(filteredCountries).to.be.an('array');
    expect(filteredCountries.length).equal(1);
    expect(filteredCountries[0].name).equal('Satanwi');
  });
});
