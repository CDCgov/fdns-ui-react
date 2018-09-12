import React from 'react';
import { shallow } from 'enzyme';
import PaneHistory from '../../src/components/PaneHistory';

describe('<PaneHistory />', () => {
  const component = shallow(
    <PaneHistory />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('pane-history');
  });
});