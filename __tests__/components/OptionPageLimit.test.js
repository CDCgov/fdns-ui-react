import React from 'react';
import { shallow } from 'enzyme';
import OptionPageLimit from '../../src/components/OptionPageLimit';

describe('<OptionPageLimit />', () => {
  const component = shallow(
    <OptionPageLimit />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('option-page-limit');
  });
});
