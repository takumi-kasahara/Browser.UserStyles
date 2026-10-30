import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';

export default defineConfig([
  js.configs.recommended,
  ts.configs.strict,
  ts.configs.stylistic,
  globalIgnores(['apm_modules', 'node_modules']),
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
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error'],
      'consistent-return': 'error',
      eqeqeq: 'error',
      'no-else-return': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
    },
  },
  {
    files: ['.tools/*.ts'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'module',
    },
  },
]);
