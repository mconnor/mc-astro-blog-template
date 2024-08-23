// @ts-check

import config from '@repo/eslint-config/astro';
import prettierConfig from 'eslint-config-prettier';

export default [
  ...config,
  prettierConfig,
  {
    ignores: ['.prettierrc.mjs','config-eslint/'],
  },
];


