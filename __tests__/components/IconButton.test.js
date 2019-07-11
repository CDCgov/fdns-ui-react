import React from 'react';
import { shallow } from 'enzyme';
import IconButton from '../../src/components/IconButton';

describe('<IconButton />', () => {
  const component = shallow(
    <IconButton />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('icon-button');
  });
});