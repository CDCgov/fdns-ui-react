import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import OptionErrorsWarnings from '../../src/components/options/OptionErrorsWarnings';

describe('<OptionErrorsWarnings />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<OptionErrorsWarnings />);
  });
});