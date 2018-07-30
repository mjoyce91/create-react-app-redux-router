import * as glob from 'glob';
import * as path from 'path';
import { setupAsyncMocks } from '../tests';

const { mockStore, mockAdapter } = setupAsyncMocks();

const options = { cwd: __dirname, ignore: './*.test.js' };
const files = glob.sync('./*.js', options);

describe('Actions', () => {
  let i;

  for(i = 0; i < files.length; i++){
    const file = files[i];
    const actions = require(file);
    let action;
    let key;

    for(key in actions) {
      action = actions[key];
      if(typeof(action) === 'function') {
        it(`action ${key} can be dispatched`, (done) => {
          const store = mockStore({ data: [] });
          const f = () => {
            setTimeout(() => {
              store.dispatch(action());
              store.dispatch(action());
              done();
            }, 0);
          };

          f();
        });
      }
    }
  }
});
