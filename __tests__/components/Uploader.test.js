import React from 'react';
import { shallow } from 'enzyme';
import Uploader from '../../src/components/Uploader';

describe('<Uploader />', () => {
  const component = shallow(
    <Uploader />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('uploader');
  });
});