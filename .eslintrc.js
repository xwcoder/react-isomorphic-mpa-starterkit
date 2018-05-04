module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest/globals": true
  },
  "plugins": ["jest"],
  "globals": {
    "__INIT_STATE__": true
  },
  "rules": {
    "semi": [
      "error",
      "never"
    ],
    "padded-blocks": [0],
    "space-before-function-paren": [0],
    "comma-dangle": [0],
    "no-cond-assign": [0],
    "no-plusplus": [0, { "allowForLoopAfterthoughts": true }],
    "no-empty": [0, {"allowEmptyCatch": true }],
    "prefer-destructuring": ["error", {"object": true, "array": false}],
    "import/prefer-default-export": [0],
    "import/no-extraneous-dependencies": [0],
    "react/prop-types": [0],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/no-find-dom-node": [0]
  }
}
