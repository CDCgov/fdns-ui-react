import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import IconButton from '../../src/components/IconButton';

describe('<IconButton />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<IconButton />);
  });
});