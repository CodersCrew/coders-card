const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jest', 'prettier', 'simple-import-sort'],
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 0,
    'sort-imports': 0, // turned of as we're using simple-import-sort for sorting
    'no-use-before-define': 0,
    'spaced-comment': [2, 'always', { markers: ['/'] }], // modified to allow TS references with triple brackets
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }], // reduces allowed extensions to typescript ones
    'react/jsx-curly-newline': 0, // conflicts with prettier
    'react/jsx-one-expression-per-line': 0, // conflicts with prettier
    'react/jsx-indent': 0, // conflicts with prettier
    'react/jsx-wrap-multilines': 0, // conflicts with prettier
    'react/destructuring-assignment': 0, // in many cases we want to destructure part of the props
    '@typescript-eslint/explicit-module-boundary-types': 0, // in many cases TS knows return type of the function so we don't need to specify it explicitly
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    'simple-import-sort/sort': 2, // treat unsorted imports as lint errors
    'import/order': 0, // turned of as we're using simple-import-sort for sorting
    'import/no-cycle': 0,
    'import/prefer-default-export': 0, // we're using default exports only for pages
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/*.test.tsx', '**/*.stories.tsx', 'craco.config.js', '**/test/*'] }, // files where dev dependencies imports are allowed
    ],
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'simple-import-sort/sort': [
      2,
      {
        groups: [
          ['^\\u0000'], // Side effect imports.
          ['^react', '^@?\\w'], // Packages. `react` related packages come first.
          ['^[^.]'], // Absolute imports (mostly written as `@/foo`). Anything that does not start with a dot.
          ['^\\.'], // Relative imports. Anything that starts with a dot.
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx'], // files with components
      rules: {
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
      },
    },
    {
      files: ['*.js'], // mostly files with configs like the current one
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname)],
        extensions: ['.js', '.ts', '.tsx'],
      },
      typescript: {
        project: path.resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
};
