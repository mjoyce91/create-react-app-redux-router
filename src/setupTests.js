const localStorageMock = {
  getItem: () => null,
  setItem: jest.fn(),
  clear: jest.fn(),
  read: jest.fn(),
};

global.localStorage = localStorageMock;
global.sessionStorage = Object.assign({}, localStorageMock);
