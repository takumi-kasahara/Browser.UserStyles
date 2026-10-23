import pluginJs from '@eslint/js';
export default [
  pluginJs.configs.recommended,
  {
    ignores: ['node_modules'],
  },
  {
    files: ['**/*.mjs'],
    rules: {
      'consistent-return': 'error',
      eqeqeq: 'error',
      'no-else-return': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      quotes: ['error', 'single'],
      semi: 'error',
    },
  },
];
