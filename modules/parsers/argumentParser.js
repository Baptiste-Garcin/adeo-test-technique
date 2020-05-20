module.exports = function (args) {
  const [nodePath, filePath, userArgs] = args;

  if (!userArgs) {
    throw new Error('missing user arguments');
  }

  const [command, value] = userArgs.split('=');

  if (command !== '--filter' && command !== '--count') {
    throw new Error(`unknown flag ${command}`);
  }

  if (!value && command === '--filter') {
    throw new Error('missing value');
  }

  return [command, value];
};
