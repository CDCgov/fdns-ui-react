import React from 'react';
import { shallow } from 'enzyme';
import OptionAction from '../../src/components/OptionAction';

describe('<OptionAction />', () => {
  const component = shallow(
    <OptionAction />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('option-action');
  });
});