import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('HomePageComponent', () => {
  const props = {
  };

  it('is defined', () => {
    const wrapper = shallow(
      <HomePage
        {...props}
      />,
    );
    expect(wrapper).toBeDefined();
  });
});
