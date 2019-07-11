import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Loader from '../../src/components/Loader';

describe('<Loader />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<Loader />);
  });
});
