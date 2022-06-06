module.exports = {
  ...require('@okp4/eslint-config/.prettierrc.js'),
  overrides: [
    {
      files: ['**/*.scss'],
      options: {
        singleQuote: false
      }
    }
  ]
}
