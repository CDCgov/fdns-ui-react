import React from 'react';
import { shallow } from 'enzyme';
import FilterSelect from '../../src/components/FilterSelect';

describe('<FilterSelect />', () => {
  const component = shallow(
    <FilterSelect />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('filter-select');
  });
});