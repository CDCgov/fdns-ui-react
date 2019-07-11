import React from 'react';
import { shallow } from 'enzyme';
import OptionExport from '../../src/components/OptionExport';

describe('<OptionExport />', () => {
  const component = shallow(
    <OptionExport />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('option-export');
  });
});