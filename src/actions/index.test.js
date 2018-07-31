import * as glob from 'glob';
import * as path from 'path';
import { setupAsyncMocks } from '../tests';

const { mockStore, mockAdapter } = setupAsyncMocks();

const options = { cwd: __dirname, ignore: './*.test.js' };
const files = glob.sync('./*.js', options);

function assertAction(done, action = () => {}, network = false) {
  const store = mockStore({ data: [] });
  const f = () => {
    setTimeout(() => {
      store.dispatch(action());
      store.dispatch(action());
      done();
    }, 0);
  };

  mockAdapter.reset();

  /**
   * Allows network passthrough
   */
  if(network) {
    mockAdapter
      .onAny()
      .reply(config => new Promise((resolve, reject) => resolve([200, []])))
      .onAny()
      .passThrough();
  }

  f();
}

describe('Actions', () => {
  let i;

  for(i = 0; i < files.length; i++){
    const file = files[i];
    const actions = require(file);

    for(const key in actions) {
      const action = actions[key];

      if(typeof(action) === 'function') {
        it(`action ${key} can be dispatched for on errors`, (done) => {
          assertAction(done, action, false);
        });

        it(`action ${key} can be dispatched for on success`, (done) => {
          assertAction(done, action, true);
        });
      }
    }
  }
});
