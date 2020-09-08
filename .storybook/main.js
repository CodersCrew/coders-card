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
  webpackFinal: async (config) => {
    config.module.rules[0].use[0].options.plugins = [
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve('babel-plugin-remove-graphql-queries'),
    ];

    return config;
  },
};
