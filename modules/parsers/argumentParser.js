module.exports = function (args) {
  const [nodePath, filePath, ...userArgs] = args;

  if (!userArgs.length) {
    throw new Error('missing user arguments');
  }

  if (userArgs.some(flag => !flag.startsWith('--filter=') && !flag.startsWith('--count'))) {
    throw new Error(`unknown flag ${userArgs}`);
  }

  const commands = [];
  const filterFlag = userArgs.find(flag => flag.startsWith('--filter'));
  if (filterFlag) {
    const [action, value] = filterFlag.split('=');
    if (!value) {
      throw new Error('missing value');
    }

    commands.push({ action, value });
  }

  const countFlag = userArgs.find(flag => flag.startsWith('--count'));
  if (countFlag) {
    commands.push({ action: '--count' });
  }

  return commands;
};
