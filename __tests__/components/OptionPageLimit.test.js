import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import OptionPageLimit from '../../src/components/OptionPageLimit';

describe('<OptionPageLimit />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<OptionPageLimit />);
  });
});
