module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  plugins: ['prettier', '@typescript-eslint/eslint-plugin'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'react-app',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
      ],

      plugins: ['@typescript-eslint', 'prettier'],
      rules: {
        'import/no-extraneous-dependencies': [
          2,
          { devDependencies: ['**/*.test.*', '**/*.stories.*'] },
        ],
        'import/no-anonymous-default-export': 0,
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'import/extensions': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/no-children-prop': ['warn'],
        'react/jsx-filename-extension': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react/prop-types': 'off',
        'react/self-closing-comp': ['error'],
        'react/jsx-sort-props': [
          'warn',
          {
            shorthandFirst: true,
            noSortAlphabetically: true,
            callbacksLast: true,
          },
        ],

        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-unused-expressions': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
  rules: {
    'no-duplicate-imports': ['error', { includeExports: true }],
    quotes: [1, 'single'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    'jsx-quotes': ['warn', 'prefer-double'],

    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@chakra-ui/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
