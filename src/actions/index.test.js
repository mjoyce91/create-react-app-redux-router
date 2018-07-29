import { setupAsyncMocks } from '../test';

const { mockAdapter } = setupAsyncMocks();

describe('actions', () => {
  beforeEach(() => {
    mockAdapter.reset();
  });

  it('can fetch a client', (done) => {
    // mockAdapter.onGet('/client/1/').reply(200,
    //   clientObject,
    // );
    //
    // const f = () => {
    //   setTimeout(() => {
    //     const clientPromise = fetchClient(1);
    //     Promise.resolve(clientPromise)
    //       .then((client) => {
    //         expect(client.id).toBeDefined();
    //         done();
    //       });
    //   }, 0);
    // };
    // f();
  });
});
