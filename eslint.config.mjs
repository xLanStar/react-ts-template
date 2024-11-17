import eslint from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint, { configs } from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist"],
  },
  {
    extends: [
      eslint.configs.recommended,
      ...configs.recommended,
      reactPlugin.configs.flat.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      eslintPluginPrettierRecommended,
    ],
    files: ["**/*.{ts,mts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefreshPlugin,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: "module",
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "import/no-unresolved": "off",
      "import/order": "error",
      "no-undef": ["error", { typeof: true }],
      "react/button-has-type": "error",
      "react/destructuring-assignment": [
        "error",
        "always",
        { destructureInSignature: "always" },
      ],
      "react/display-name": "error",
      "react/function-component-definition": [
        "warn",
        { namedComponents: "arrow-function" },
      ],
      "react/jsx-curly-brace-presence": "error",
      "react/jsx-fragments": "error",
      "react/jsx-key": [
        "error",
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      "react/jsx-pascal-case": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      // "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
      "react/no-typos": "error",
      "react/no-unused-prop-types": "error",
      "react/prefer-stateless-function": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": "error",
      "react-refresh/only-export-components": "warn",
    },
  }
);
