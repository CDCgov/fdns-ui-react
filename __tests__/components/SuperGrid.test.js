import React from 'react';
import { shallow } from 'enzyme';
import SuperGrid from '../../src/components/SuperGrid';
import { messages, headers } from '../../src/fixtures/fixtures';

describe('<SuperGrid />', () => {
  const component = shallow(
    <SuperGrid data={messages} headers={headers} />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('grid');
  });

  it('builds the grid with headers and mapped data', () => {
    expect(component.html()).toContain('Alice');
    expect(component.html()).toContain('Name');
  });

  it('uses the prop footer if passed', () => {
    const footer = (
      <div className="custom-footer"></div>
    );
    const customFooterGrid = shallow(
      <SuperGrid data={messages.splice(0,3)} headers={headers} footer={footer} />
    );

    expect(customFooterGrid.html()).toContain('custom-footer');
  });
});