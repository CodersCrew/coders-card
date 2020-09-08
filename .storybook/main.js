const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(ts|tsx)'],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
        include: [path.resolve(__dirname, '../src')],
        transpileManager: true,
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
  ],
};
