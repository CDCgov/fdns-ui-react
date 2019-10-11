import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import OptionAction from '../../src/components/options/OptionAction';

describe('<OptionAction />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<OptionAction />);
  });
});