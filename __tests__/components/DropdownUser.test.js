import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import DropdownUser from '../../src/components/DropdownUser';

describe('<DropdownUser />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<DropdownUser />);
  });
});