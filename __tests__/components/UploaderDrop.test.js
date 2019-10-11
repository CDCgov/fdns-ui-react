import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import UploaderDrop from '../../src/components/uploaders/UploaderDrop';

describe('<UploaderDrop />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<UploaderDrop />);
  });
});