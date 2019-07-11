import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import PaneHistory from '../../src/components/PaneHistory';

describe('<PaneHistory />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<PaneHistory />);
  });
});