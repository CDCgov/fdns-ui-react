import React from 'react';
import { shallow } from 'enzyme';
import UploaderDrop from '../../src/components/UploaderDrop';

describe('<UploaderDrop />', () => {
  const component = shallow(
    <UploaderDrop />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('uploader-drop');
  });
});