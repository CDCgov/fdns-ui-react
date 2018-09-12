import React from 'react';
import { shallow } from 'enzyme';
import DataEndpoint from '../../src/components/DataEndpoint';

describe('<DataEndpoint />', () => {
  const component = shallow(
    <DataEndpoint />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('data-endpoint');
  });
});
