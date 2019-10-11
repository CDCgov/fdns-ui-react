import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import SuperButton from '../../src/components/buttons/SuperButton';

describe('<SuperButton />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<SuperButton />);
  });
});