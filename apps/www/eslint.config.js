import js from '@eslint/js'
import reactInternals from '@repo/eslint-config/eslint.react.config.mjs'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  ...reactInternals,
  ...compat.config({
    extends: ['eslint:recommended', 'next'],
  }),
  {
    ignores: ['**/node_modules/**', '**/.next/**', '**/.vercel/**'],
  },
]

/** @type {import("eslint").Linter.Config[]} */
export default eslintConfig
