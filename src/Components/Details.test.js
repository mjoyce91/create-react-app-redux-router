import React from 'react';
import { shallow } from 'enzyme';
import Details from './Details';

describe('DetailsComponent', () => {
  const props = {
  };

  it('is defined', () => {
    const wrapper = shallow(
      <Details
        {...props}
      />,
    );
    expect(wrapper).toBeDefined();
  });
});
