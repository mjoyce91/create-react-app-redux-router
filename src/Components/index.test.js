import React from 'react';
import { shallow } from 'enzyme';
import * as glob from 'glob';
// import * as path from 'path';

const options = { cwd: __dirname, ignore: './*.test.js' };
const files = glob.sync('./*.js', options);

describe('Components', () => {
  files.forEach(file => {
    const Component = require(file).default;

    it(`component => ${Component.name} is defined`, () => {
      const wrapper = shallow(<Component />);
      expect(wrapper).toBeDefined();
    });
  })
});
