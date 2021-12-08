const path = require(`path`)

module.exports = {
  extends: [`eslint:recommended`, `next/core-web-vitals`],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "import/no-duplicates": 2,
    "import/no-unresolved": 0,
    "import/order": [
      1,
      {
        groups: [
          [`builtin`, `external`],
          [`object`, `unknown`, `type`],
          [`internal`, `parent`, `index`, `sibling`],
        ],
        pathGroupsExcludedImportTypes: [`builtin`],
        "newlines-between": `always`,
        alphabetize: {order: `asc`, caseInsensitive: true},
        warnOnUnassignedImports: true,
      },
    ],
    "prefer-const": 0,
    "no-console": [1, {allow: [`warn`, `error`]}],
    "no-constant-condition": [2, {checkLoops: false}],
    "no-control-regex": 0,
    "no-empty": [1, {allowEmptyCatch: true}],
    "no-unused-vars": [1, {ignoreRestSiblings: true, args: `none`}],
    quotes: [1, `backtick`],
  },
  overrides: [
    {
      files: [`**/*.ts`, `**/*.tsx`],
      parser: `@typescript-eslint/parser`,
      parserOptions: {
        project: [path.resolve(__dirname, `tsconfig.json`)],
      },
      plugins: [`@typescript-eslint`],
      extends: `plugin:@typescript-eslint/recommended`,
      rules: {
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/consistent-type-imports": 1,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-extra-semi": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-unnecessary-condition": 1,
        "@typescript-eslint/no-unused-vars": [1, {ignoreRestSiblings: true}],
        "@typescript-eslint/quotes": [1, `backtick`],
        "prefer-const": 0,
        quotes: 0,
      },
    },
    {
      files: [`**/*.jsx`, `**/*.tsx`],
      plugins: [`react`],
      extends: `plugin:react/recommended`,
      rules: {
        "@next/next/no-img-element": 0,
        "react/jsx-boolean-value": 1,
        "react/jsx-curly-brace-presence": 1,
        "react/jsx-no-useless-fragment": [1, {allowExpressions: true}],
        "react/no-unused-prop-types": 1,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 2,
        "react/self-closing-comp": 1,
      },
    },
  ],
}
