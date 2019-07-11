import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import DataInspector from '../../src/components/DataInspector';

describe('<DataInspector />', () => {
let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<DataInspector />);
  });
});