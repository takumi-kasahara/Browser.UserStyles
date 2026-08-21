import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
export default [
  pluginJs.configs.recommended,
  stylistic.configs.recommended,
  {
    ignores: ['node_modules'],
  },
  {
    files: ['**/*.mjs'],
    rules: {
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/no-multi-spaces': ['error', { ignoreEOLComments: true }],
      '@stylistic/quote-props': ['error', 'consistent'],
      '@stylistic/semi': ['error', 'always'],
      'consistent-return': 'error',
      'eqeqeq': 'error',
      'no-else-return': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'quotes': ['error', 'single'],
      'semi': 'error',
    },
  },
];
