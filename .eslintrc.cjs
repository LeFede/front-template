module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-console': ['error'],
    'react/jsx-tag-spacing': ['error'],
    'max-len': [
      'error',
      {
        code: 80,
        // tabWidth: 2,
        // "ignoreComments": true, //"comments": 80
        // "ignoreUrls": true,
        // "ignoreStrings": true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts'],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
