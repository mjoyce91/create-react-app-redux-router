import React from 'react';
import { shallow } from 'enzyme';
import * as glob from 'glob';
import configureStore from '../store';

const options = { cwd: __dirname, ignore: './*.test.js' };
const files = glob.sync('./*.js', options);

describe('Containers', () => {
  files.forEach(file => {
    const module = require(file);
    const Container = module.default.WrappedComponent;
    const noop = () => ({});
    /**
     * To take advantage of automated container tests, be sure to have the
     * container's `mapStateToProps` and `mapDispatchToProps` exported.
     */
    const store = configureStore();
    const mapState = (module.mapStateToProps || noop)(store.getState());
    const mapDispatch = (module.mapDispatchToProps || noop)(store.dispatch);

    it(`container => ${Container.name} is defined`, () => {
      const props = Object.assign({}, mapState, mapDispatch);
      const wrapper = shallow(<Container {...props} />);
      expect(wrapper).toBeDefined();
    });
  })
});
