import React from 'react';
import { shallow } from 'enzyme';
import DropdownUser from '../../src/components/DropdownUser';

describe('<DropdownUser />', () => {
  const component = shallow(
    <DropdownUser />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('dropdown-user');
  });
});