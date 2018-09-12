import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../../src/components/Filter';

describe('<Filter />', () => {
  const component = shallow(
    <Filter label="Test" />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('filter');
    expect(component.html()).toContain('Test');
  });
});