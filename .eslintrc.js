const path = require('path');

const configPath = path.resolve(__dirname, 'tsconfig.eslint.json');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: configPath,
    ecmaFeatures: { jsx: true },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    complexity: [2, 11],
    'sort-imports': 0,
    'spaced-comment': [2, 'always', { markers: ['/'] }],
    'class-methods-use-this': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/prefer-enum-initializers': 2,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          ['^\\u0000'], // side effect imports.
          ['^react', '^@?\\w'], // packages from node_modules. react related packages come first.
          ['^[^.]'], // absolute imports (mostly written as `@/foo`). Anything that does not start with a dot.
          ['^\\.'], // relative imports. Anything that starts with a dot.
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/destructuring-assignment': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-unescaped-entities': 0,
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'react/react-in-jsx-scope': 0,
      },
    },
    {
      files: ['*.test.(ts|tsx)', '*.stories.tsx', 'setupTests.ts'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
    {
      files: ['*.js'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
      },
    },
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.tsx'],
      },
      typescript: {
        project: configPath,
      },
    },
  },
};
