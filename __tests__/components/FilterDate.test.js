import React from 'react';
import { shallow } from 'enzyme';
import FilterDate from '../../src/components/FilterDate';

describe('<FilterDate />', () => {
  const component = shallow(
    <FilterDate />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('filter-date');
  });
});