import * as glob from 'glob';

const options = { cwd: __dirname, ignore: './*.test.js' };
const files = glob.sync('./*.js', options);

describe('Reducers', () => {
  files.forEach(file => {
    const reducers = require(file);
    let reducer;
    let key;

    /* eslint-disable no-restricted-syntax */
    for(key in reducers) {
      reducer = reducers[key];
      if(typeof(reducer) === 'function') {
        it(`reducer => ${key}() should return an initial state`, () => {
          expect(reducer(null, {})).toBeDefined();
        });
      }
    }
    /* eslint-enable no-restricted-syntax */
  })
});
