import * as glob from 'glob';
import * as path from 'path';

const options = { cwd: __dirname, ignore: './*.test.js' };
const files = glob.sync('./*.js', options);

describe('Reducers', () => {
  let i;

  for(i = 0; i < files.length; i++){
    const file = files[i];
    const reducers = require(file);
    let reducer;
    let key;

    for(key in reducers) {
      reducer = reducers[key];
      if(typeof(reducer) === 'function') {
        it(`reducer => ${key}() should return an initial state`, () => {
          expect(reducer(null, {})).toBeDefined();
        });
      }
    }
  }
});
