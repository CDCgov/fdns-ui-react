import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import OptionExport from '../../src/components/OptionExport';

describe('<OptionExport />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<OptionExport />);
  });
});