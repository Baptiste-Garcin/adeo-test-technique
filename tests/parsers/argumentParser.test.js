const { expect } = require('chai');

const argumentParser = require('../../modules/parsers/argumentParser');

describe('argument parsers', () => {
  it('--filter flag is found', () => {
    const [filterFlag] = argumentParser(['/usr/bin/node', '/home/ernest/Projects/adeo/app.js', '--filter=ry']);
    expect(filterFlag.action).equal('--filter');
    expect(filterFlag.value).equal('ry');
  });

  it('handle unknown flag', () => {
    const func = () => argumentParser(['/usr/bin/node', '/home/ernest/Projects/adeo/app.js', '--tests=ry']);
    expect(func).throw('unknown flag --tests');
  });

  it('handle missing flag', () => {
    const func = () => argumentParser(['/usr/bin/node', '/home/ernest/Projects/adeo/app.js ']);
    expect(func).throw('missing user arguments');
  });

  it('handle missing value', () => {
    const func = () => argumentParser(['/usr/bin/node', '/home/ernest/Projects/adeo/app.js', '--filter=']);
    expect(func).throw('missing value');
  });

  it('--count flag is found', () => {
    const [counterFlag] = argumentParser(['/usr/bin/node', '/home/ernest/Projects/adeo/app.js', '--count']);
    expect(counterFlag.action).equal('--count');
  });

  it('handle flag combo', () => {
    const [filterAction, countAction] = argumentParser(['/usr/bin/node', '/home/ernest/Projects/adeo/app.js', '--filter=ry', '--count']);
    expect(countAction.action).equal('--count');
    expect(filterAction.action).equal('--filter');
    expect(filterAction.value).equal('ry');
  });
});
