import React from 'react';
import { shallow } from 'enzyme';
import OptionView from '../../src/components/OptionView';

describe('<OptionView />', () => {
  const component = shallow(
    <OptionView />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('option-view');
  });
});