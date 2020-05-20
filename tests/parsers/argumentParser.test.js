const { expect } = require('chai');

const argumentParser = require('../../modules/parsers/argumentParser');

describe('argument parsers', () => {
  it('--filter flag is found', () => {
    const [action, value] = argumentParser(['/usr/bin/node', '/home/ernest/Projects/adeo/app.js', '--filter=ry']);
    expect(action).equal('--filter');
    expect(value).equal('ry');
  });

  it('handle unknown or missing flag', () => {
    expect(argumentParser.bind(undefined, ['/usr/bin/node', '/home/ernest/Projects/adeo/app.js', '--tests=ry'])).throw('unknown flag --tests');
    expect(argumentParser.bind(undefined, ['/usr/bin/node', '/home/ernest/Projects/adeo/app.js ry'])).throw('missing user arguments');
  });

  it('handle missing value', () => {
    expect(argumentParser.bind(undefined, ['/usr/bin/node', '/home/ernest/Projects/adeo/app.js', '--filter'])).throw('missing value');
  });

  it('--count flag is found', () => {
    const [action] = argumentParser(['/usr/bin/node', '/home/ernest/Projects/adeo/app.js', '--count']);
    expect(action).equal('--count');
  });
});
