import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../src/components/SearchBar';

describe('<SearchBar />', () => {
  const component = shallow(
    <SearchBar />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('search-bar');
  });
});