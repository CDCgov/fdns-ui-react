import React from 'react';
import { shallow } from 'enzyme';
import DataLayers from '../../src/components/DataLayers';

describe('<DataLayers />', () => {
  const component = shallow(
    <DataLayers />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('data-layers');
  });
});