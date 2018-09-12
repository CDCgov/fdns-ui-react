import React from 'react';
import { shallow } from 'enzyme';
import UploaderPaste from '../../src/components/UploaderPaste';

describe('<UploaderPaste />', () => {
  const component = shallow(
    <UploaderPaste />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('uploader-paste');
  });
});