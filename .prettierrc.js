module.exports = {
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  jsxSingleQuote: false,
  useTabs: false,
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'auto',
  quoteProps: 'as-needed',
  overrides: [
    {
      files: ['**/*.scss'],
      options: {
        singleQuote: false
      }
    }
  ]
}
