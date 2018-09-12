import React from 'react';
import { shallow } from 'enzyme';
import SuperTable from '../../src/components/SuperTable';
import { messages, headers } from '../../src/fixtures/fixtures';

describe('<SuperTable />', () => {
  const component = shallow(
    <SuperTable data={messages} headers={headers} />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('super-table');
  });

  it('builds the table with headers and mapped data', () => {
    expect(component.html()).toContain('Alice');
    expect(component.html()).toContain('Name');
  });
});