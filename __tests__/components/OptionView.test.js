import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import OptionView from '../../src/components/options/OptionView';

describe('<OptionView />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<OptionView />);
  });
});