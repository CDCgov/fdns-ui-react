import React from 'react';
import UploaderPaste from '../../src/components/UploaderPaste';
import { createShallow } from '@material-ui/core/test-utils';

describe('<UploaderPaste />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<UploaderPaste />);
  });
});