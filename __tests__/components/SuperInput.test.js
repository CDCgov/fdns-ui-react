import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import SuperInput from '../../src/components/inputs/SuperInput';

describe('<SuperInput />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });
  
  it('renders', () => {
    const wrapper = shallow(<SuperInput />);
  });
});