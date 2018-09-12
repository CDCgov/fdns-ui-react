import React from 'react';
import { shallow } from 'enzyme';
import OptionErrorsWarnings from '../../src/components/OptionErrorsWarnings';

describe('<OptionErrorsWarnings />', () => {
  const component = shallow(
    <OptionErrorsWarnings />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('option-errors-warnings');
  });
});