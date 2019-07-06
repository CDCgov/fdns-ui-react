import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Login from '../../src/components/Login';

describe('<Login />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<Login />);
  });
});