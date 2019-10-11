import React from 'react';
import { shallow } from 'enzyme';
import UploaderList from '../../src/components/uploaders/UploaderList';

describe('<UploaderList />', () => {
  const component = shallow(
    <UploaderList />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('uploader-list');
  });
});