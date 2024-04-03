const eslint = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js', 'dist'],
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'prettier',
    'plugin:eslint-comments/recommended',
    'plugin:jest/all',
    'plugin:jest-formatting/strict',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: [
    'import',
    'prettier',
    '@typescript-eslint',
    'simple-import-sort',
    'jest',
    'jest-formatting',
    'sonarjs',
  ],
  globals: {},
  rules: {
    curly: ['error', 'all'],

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
        printWidth: 100,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],

    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',

    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/prefer-default-export': 'off',

    'class-methods-use-this': 'off',
    'sort-imports': 'off',
    'import/order': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          'test/**/*.ts',
        ],
      },
    ],

    'simple-import-sort/imports': 'error',
    'jest/no-hooks': 'off',
    'jest/valid-title': [
      'error',
      {
        ignoreTypeOfDescribeName: true,
      }
    ],

    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    'default-param-last': 'off',
    'jest/max-expects': 'off',
    'jest/no-conditional-in-test': 'off',
    'jest/no-untyped-mock-factory': 'off',
    'jest/prefer-mock-promise-shorthand': 'off',
    'jest/prefer-snapshot-hint': 'off',
    'jest/require-hook': 'off',
    'jest/unbound-method': 'off',
    'no-promise-executor-return': 'off',
    'prefer-regex-literals': 'off',
    'sonarjs/no-gratuitous-expressions': 'off',
    'sonarjs/prefer-single-boolean-return': 'off',
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/no-await-expression-member': 'off',
    'unicorn/no-empty-file': 'off',
    'unicorn/no-useless-promise-resolve-reject': 'off',
    'unicorn/prefer-export-from': 'off',
    'unicorn/prefer-json-parse-buffer': 'off',
    'unicorn/prefer-module': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        // https://github.com/benmosher/eslint-plugin-import/issues/1485#issuecomment-535351922
      },
      node: {
        extensions: ['.js', '.ts', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts', '.mjs'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'consistent-return': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/781
        'unicorn/no-array-callback-reference': 'off',

        // duplicate of @typescript-eslint/no-unused-vars
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',

        // https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
        'no-undef': 'off',

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
        // note you must disable the base rule as it can report incorrect errors
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],

        // note you must disable the base rule as it can report incorrect errors
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['error'],

        'no-redeclare': 'off',

        '@typescript-eslint/no-redeclare': 'off',

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],

        // perfer to use single quites
        '@typescript-eslint/quotes': [
          'error',
          'single',
          {
            avoidEscape: true,
            allowTemplateLiterals: true,
          },
        ],

        'unicorn/prefer-top-level-await': 'off',
      },
    },
    {
      files: ['*.test.ts'],
      rules: {
        'max-classes-per-file': 'off',
      },
    },
  ],
}

eslint.rules['no-new'] = 0
eslint.rules['@typescript-eslint/explicit-module-boundary-types'] = 'off'

/**
 * This looks like a garbage ESM rule.
 * Wants everything prefixed with "node:*"
 */
eslint.rules['unicorn/prefer-node-protocol'] = 0

eslint.rules['unicorn/numeric-separators-style'] = 0

eslint.rules['jest/expect-expect'] = [
  'error',
  {
    assertFunctionNames: ['expect', 'expectCDK'],
  },
]

eslint.rules['@typescript-eslint/no-unused-vars'] = [
  'error',
  {
    ignoreRestSiblings: true,
  },
]

eslint.rules['@typescript-eslint/no-unsafe-declaration-merging'] = 0

module.exports = eslint
