import React from 'react';
import { shallow } from 'enzyme';
import DropdownDownloads from '../../src/components/DropdownDownloads';

describe('<DropdownDownloads />', () => {
  const component = shallow(
    <DropdownDownloads />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('dropdown-downloads');
  });
});