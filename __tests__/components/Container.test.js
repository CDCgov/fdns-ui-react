import React from 'react';
import { shallow } from 'enzyme';
import Container from '../../src/components/Container';

describe('<Container />', () => {
  const component = shallow(
    <Container />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('Container');
  });
});