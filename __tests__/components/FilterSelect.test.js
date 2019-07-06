import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import FilterSelect from '../../src/components/FilterSelect';

describe('<FilterSelect />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<FilterSelect />);
  });
});