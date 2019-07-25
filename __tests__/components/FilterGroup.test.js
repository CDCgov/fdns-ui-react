import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import FilterGroup from '../../src/components/filters/FilterGroup';

describe('<FilterGroup />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(
      <FilterGroup>
        <p id="foo">bar</p>
      </FilterGroup>
    )
  });

  it('renders the children', () => {
    expect(shallow(
      <FilterGroup>
        <p id="foo">bar</p>
      </FilterGroup>
    ).find('#foo').text()).toBe('bar');
  });
});