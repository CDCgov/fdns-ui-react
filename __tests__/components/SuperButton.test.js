import React from 'react';
import { shallow } from 'enzyme';
import SuperButton from '../../src/components/buttons/SuperButton';

describe('<SuperButton />', () => {
  const component = shallow(
    <SuperButton />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('super-button');
  });
});
