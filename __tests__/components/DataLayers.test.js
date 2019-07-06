import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import DataLayers from '../../src/components/DataLayers';

describe('<DataLayers />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<DataLayers />);
  });
});