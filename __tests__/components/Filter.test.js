import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Filter from '../../src/components/filters/Filter';

describe('<Filter />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });
  
  it('renders', () => {
    const wrapper = shallow(<Filter label="Test" />);
  });
});