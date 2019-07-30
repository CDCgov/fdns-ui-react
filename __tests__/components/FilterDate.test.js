import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import FilterDate from '../../src/components/filters/FilterDate';

describe('<FilterDate />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<FilterDate />);
  });
});