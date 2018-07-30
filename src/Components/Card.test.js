import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('CadComponent', () => {
  const props = {
  };

  it('is defined', () => {
    const wrapper = shallow(
      <Card
        {...props}
      />,
    );
    expect(wrapper).toBeDefined();
  });
});
