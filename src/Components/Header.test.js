import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('HeaderComponent', () => {
  const props = {
  };

  it('is defined', () => {
    const wrapper = shallow(
      <Header
        {...props}
      />,
    );
    expect(wrapper).toBeDefined();
  });
});
