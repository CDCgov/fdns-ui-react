import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Uploader from '../../src/components/uploaders/Uploader';

describe('<Uploader />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<Uploader />);
  });
});