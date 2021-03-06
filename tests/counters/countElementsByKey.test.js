const { expect } = require('chai');

const countElementsByKey = require('../../modules/counter/countElementsByKey');

const fixtures = [{
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
      },
      {
        name: 'Blanche Viciani',
        animals:
            [{ name: 'Barbet' },
              { name: 'Rhea' },
              { name: 'Snakes' },
              { name: 'Antelope' },
              { name: 'Echidna' },
              { name: 'Crow' },
              { name: 'Guinea Fowl' },
              { name: 'Deer Mouse' }],
      }],
}];

describe('countElementsByKeys', () => {
  it('count all element by keys', () => {
    const countedElement = countElementsByKey(fixtures);
    expect(countedElement).to.be.an('array');
    expect(countedElement[0].name).equal('Dillauti [2]');
    expect(countedElement[0].people[0].name).equal('Winifred Graham [6]');
  });
});
