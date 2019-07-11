import React from 'react';
import { shallow } from 'enzyme';
import DataInspector from '../../src/components/DataInspector';

describe('<DataInspector />', () => {
  const component = shallow(
    <DataInspector />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('data-inspector');
  });
});