import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import DropdownDownloads from '../../src/components/DropdownDownloads';

describe('<DropdownDownloads />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<DropdownDownloads />);
  });
});