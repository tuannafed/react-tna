import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  ...compat.extends('custom'),
  {
    plugins: ['jsdoc'],
    rules: {},
  },
  {
    files: ['./src/**/!(*.test|*.spec).ts'],
    plugins: ['tree-shaking'],
    rules: {
      'tree-shaking/no-side-effects-in-initialization': 'error',
    },
  },
  {
    ignores: ['./dist', './node_modules', './turbo'],
  },
  {
    files: ['*.test.ts'],
    rules: {},
  },
]
