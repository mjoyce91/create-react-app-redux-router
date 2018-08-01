module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
    'prettier',
  ],
  "globals": {
    "localStorage": true
  },
  'plugins': [
    'prettier',
  ],
  'rules': {
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'trailingComma': 'es5'
    }],
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  'rules': {
    "react/jsx-filename-extension": 0,
    "func-names": 0,
    "guard-for-in": 0,
    "import/no-dynamic-require": 0,
    "global-require": 0,
    "no-loop-func": 0,
  }
}
