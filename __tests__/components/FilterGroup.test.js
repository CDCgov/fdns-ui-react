import React from 'react';
import { shallow } from 'enzyme';
import FilterGroup from '../../src/components/FilterGroup';

describe('<FilterGroup />', () => {
  const component = shallow(
    <FilterGroup>
      <p id="foo">bar</p>
    </FilterGroup>
  );
  
  it('renders', () => {
    expect(component.html()).toContain('filter-group');
  });

  it('renders the children', () => {
    expect(component.find('#foo').text()).toBe('bar');
  });
});