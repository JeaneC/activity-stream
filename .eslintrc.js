module.exports = {
  // When adding items to this file please check for effects on sub-directories.
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "env": {
    "node": true
  },
  "plugins": [
    "import", // require("eslint-plugin-import")
    "react", // require("eslint-plugin-react")
    "jsx-a11y" // require("eslint-plugin-jsx-a11y")

    // Temporarily disabled since they aren't vendored into in mozilla central yet
    // "react-hooks", // require("react-hooks")
    // "fetch-options", // require("eslint-plugin-fetch-options")
  ],
  "settings": {
    "react": {
      "version": "16.2.0"
    }
  },
  "extends": [

    "eslint:recommended",
    "plugin:jsx-a11y/recommended", // require("eslint-plugin-jsx-a11y")
    "plugin:mozilla/recommended", // require("eslint-plugin-mozilla")
    "plugin:mozilla/browser-test",
    "plugin:mozilla/mochitest-test",
    "plugin:mozilla/xpcshell-test"
  ],
  "globals": {
    // Remove this when m-c updates their eslint: See https://github.com/mozilla/activity-stream/pull/4219
    "RPMSendAsyncMessage": true,
    "NewTabPagePreloading": true,
  },
  "overrides": [
    {
      // These files use fluent-dom to insert content
      "files": [
        "content-src/asrouter/templates/OnboardingMessage/**",
        "content-src/asrouter/templates/Trailhead/**",
      ],
      "rules": {
        "jsx-a11y/anchor-has-content": 0,
        "jsx-a11y/heading-has-content": 0,
      }
    },
    {
      // Use a configuration that's more appropriate for JSMs
      "files": "**/*.jsm",
      "parserOptions": {
        "sourceType": "script"
      },
      "env": {
        "node": false
      },
      "rules": {
        "no-implicit-globals": 0
      }
    }
  ],
  "rules": {
    // "react-hooks/rules-of-hooks": 2,

    // "fetch-options/no-fetch-credentials": 2,

    "react/jsx-boolean-value": [2, "always"],
    "react/jsx-closing-bracket-location": [2, "after-props"],
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-key": 2,
    "react/jsx-no-bind": 2,
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-target-blank": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-tag-spacing": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-wrap-multilines": 2,
    "react/no-access-state-in-setstate": 2,
    "react/no-danger": 2,
    "react/no-deprecated": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-is-mounted": 2,
    "react/no-unknown-property": 2,
    "react/require-render-return": 2,
    "react/self-closing-comp": 2,

    "accessor-pairs": [2, {"setWithoutGet": true, "getWithoutSet": false}],
    "array-bracket-newline": [2, "consistent"],
    "array-bracket-spacing": [2, "never"],
    "array-callback-return": 2,
    "array-element-newline": 0,
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "block-scoped-var": 2,
    "callback-return": 0,
    "camelcase": 0,
    "capitalized-comments": 0,
    "class-methods-use-this": 0,
    "consistent-this": [2, "use-bind"],
    "curly": [2, "all"],
    "default-case": 0,
    "dot-location": [2, "property"],
    "eqeqeq": 2,
    "for-direction": 2,
    "func-name-matching": 2,
    "func-names": 0,
    "func-style": 0,
    "function-paren-newline": 0,
    "getter-return": 2,
    "global-require": 0,
    "guard-for-in": 2,
    "handle-callback-err": 2,
    "id-blacklist": 0,
    "id-length": 0,
    "id-match": 0,
    "implicit-arrow-linebreak": 0,
    // XXX Switch back to indent once mozilla-central has decided what it is using.
    "indent": 0,
    "indent-legacy": ["error", 2, {"SwitchCase": 1}],
    "init-declarations": 0,
    "jsx-quotes": [2, "prefer-double"],
    "line-comment-position": 0,
    "lines-around-comment": ["error", {
      "allowClassStart": true,
      "allowObjectStart": true,
      "beforeBlockComment": true
    }],
    "lines-between-class-members": 2,
    "max-depth": [2, 4],
    "max-len": 0,
    "max-lines": 0,
    "max-nested-callbacks": [2, 4],
    "max-params": [2, 6],
    "max-statements": [2, 50],
    "max-statements-per-line": [2, {"max": 2}],
    "multiline-comment-style": 0,
    "multiline-ternary": 0,
    "new-cap": [2, {"newIsCap": true, "capIsNew": false}],
    "new-parens": 2,
    "newline-after-var": 0,
    "newline-before-return": 0,
    "newline-per-chained-call": [2, {"ignoreChainWithDepth": 3}],
    "no-alert": 2,
    "no-await-in-loop": 0,
    "no-bitwise": 0,
    "no-buffer-constructor": 2,
    "no-catch-shadow": 2,
    "no-confusing-arrow": [2, {"allowParens": true}],
    "no-console": 1,
    "no-continue": 0,
    "no-div-regex": 2,
    "no-duplicate-imports": 2,
    "no-empty-function": 0,
    "no-eq-null": 2,
    "no-extend-native": 2,
    "no-extra-label": 2,
    "no-extra-parens": 0,
    "no-floating-decimal": 2,
    "no-implicit-coercion": [2, {"allow": ["!!"]}],
    "no-implicit-globals": 2,
    "no-inline-comments": 0,
    "no-invalid-this": 0,
    "no-label-var": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-mixed-operators": [2, {"allowSamePrecedence": true, "groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["==", "!=", "===", "!==", ">", ">=", "<", "<="], ["&&", "||"], ["in", "instanceof"]]}],
    "no-mixed-requires": 2,
    "no-multi-assign": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": [2, {"max": 1, "maxBOF": 0, "maxEOF": 0}],
    "no-negated-condition": 0,
    "no-negated-in-lhs": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-require": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 2,
    "no-path-concat": 2,
    "no-plusplus": 0,
    "no-process-env": 0,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-prototype-builtins": 2,
    "no-restricted-globals": 0,
    "no-restricted-imports": 0,
    "no-restricted-modules": 0,
    "no-restricted-properties": 0,
    "no-restricted-syntax": 0,
    "no-return-assign": [2, "except-parens"],
    "no-script-url": 2,
    "no-shadow": 2,
    "no-spaced-func": 2,
    "no-sync": 0,
    "no-template-curly-in-string": 2,
    "no-ternary": 0,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": 0,
    "no-unmodified-loop-condition": 2,
    "no-unused-expressions": 2,
    "no-use-before-define": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-useless-rename": 2,
    "no-var": 2,
    "no-void": 2,
    "no-warning-comments": 0, // TODO: Change to `1`?
    "nonblock-statement-body-position": 2,
    "object-curly-newline": [2, {"multiline": true, "consistent": true}],
    "object-curly-spacing": [2, "never"],
    "object-property-newline": [2, {"allowMultiplePropertiesPerLine": true}],
    "one-var": [2, "never"],
    "one-var-declaration-per-line": [2, "initializations"],
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "after"],
    "padding-line-between-statements": 0,
    "prefer-arrow-callback": ["error", {"allowNamedFunctions": true}],
    "prefer-const": 0, // TODO: Change to `1`?
    "prefer-destructuring": [2, {"AssignmentExpression": {"array": true}, "VariableDeclarator": {"array": true, "object": true}}],
    "prefer-numeric-literals": 2,
    "prefer-promise-reject-errors": 2,
    "prefer-reflect": 0,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "quote-props": [2, "consistent"],
    "radix": [2, "always"],
    "require-await": 2,
    "require-jsdoc": 0,
    "semi-spacing": [2, {"before": false, "after": true}],
    "semi-style": 2,
    "sort-imports": [2, {"ignoreCase": true}],
    "sort-keys": 0,
    "sort-vars": 2,
    "space-in-parens": [2, "never"],
    "strict": 0,
    "switch-colon-spacing": 2,
    "symbol-description": 2,
    "template-curly-spacing": [2, "never"],
    "template-tag-spacing": 2,
    "unicode-bom": [2, "never"],
    "valid-jsdoc": [0, {"requireReturn": false, "requireParamDescription": false, "requireReturnDescription": false}],
    "vars-on-top": 2,
    "wrap-iife": [2, "inside"],
    "wrap-regex": 0,
    "yield-star-spacing": [2, "after"],
    "yoda": [2, "never"]
  }
};
