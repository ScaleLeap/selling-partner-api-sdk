const defaultConfiguration = require('@scaleleap/utils/eslint')

module.exports = {
  ...defaultConfiguration,
  overrides: [
    ...defaultConfiguration.overrides,
    {
      files: ['.eslintrc.js', 'utils/generator/*.ts', 'utils/github/*.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
