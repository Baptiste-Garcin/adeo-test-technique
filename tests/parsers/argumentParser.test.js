const { expect } = require('chai');

const argumentParser = require('../../modules/parsers/argumentParser');

describe('argument parsers', () => {
  it('--filter flag is found', () => {
    const [filterFlag] = argumentParser(['/usr/bin/node', '/home/ernest/Projects/adeo/app.js', '--filter=ry']);
    expect(filterFlag.action).equal('--filter');
    expect(filterFlag.value).equal('ry');
  });

  it('handle unknown or missing flag', () => {
    expect(argumentParser.bind(undefined, ['/usr/bin/node', '/home/ernest/Projects/adeo/app.js', '--tests=ry'])).throw('unknown flag --tests');
    expect(argumentParser.bind(undefined, ['/usr/bin/node', '/home/ernest/Projects/adeo/app.js ry'])).throw('missing user arguments');
  });

  it('handle missing value', () => {
    expect(argumentParser.bind(undefined, ['/usr/bin/node', '/home/ernest/Projects/adeo/app.js', '--filter='])).throw('missing value');
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
