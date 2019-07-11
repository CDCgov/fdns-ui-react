import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../../src/components/Loader';

describe('<Loader />', () => {
  const component = shallow(
    <Loader />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('loader');
  });
});
