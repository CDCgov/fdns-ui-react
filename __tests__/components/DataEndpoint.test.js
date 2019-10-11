import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import DataEndpoint from '../../src/components/data-display/DataEndpoint';

describe('<DataEndpoint />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });
  
  it('renders', () => {
    const wrapper = shallow(<DataEndpoint />);
  });
});