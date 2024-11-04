module.exports = {
  extends: ['custom'],
  plugins: ['jsdoc'],
  rules: {},
  overrides: [
    {
      files: ['./src/**/!(*.test|*.spec).ts'],
      plugins: ['tree-shaking'],
      rules: {
        'tree-shaking/no-side-effects-in-initialization': 'error',
      },
    },
  ],
  ignorePatterns: ['./dist', './node_modules', './turbo'],
  overrides: [
    {
      files: ['*.test.ts'],
      rules: {},
    },
  ],
}
