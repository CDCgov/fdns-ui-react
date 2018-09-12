import React from 'react';
import { shallow } from 'enzyme';
import SuperInput from '../../src/components/SuperInput';

describe('<SuperInput />', () => {
  const component = shallow(
    <SuperInput />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('super-input');
  });
});