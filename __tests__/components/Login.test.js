import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../src/components/Login';

describe('<Login />', () => {
  const component = shallow(
    <Login />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('login');
  });
});