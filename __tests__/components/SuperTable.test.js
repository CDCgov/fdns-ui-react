import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import SuperTable from '../../src/components/layouts/SuperTable';
import { messages, headers } from '../../src/fixtures/fixtures';

describe('<SuperTable />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<SuperTable data={messages} headers={headers} />);
  });

  // it('builds the table with headers and mapped data', () => {
  //   // TODO: fix this, the new VirtualizedTable makes the table body adjacent and Enzyme doesn't seem to have an adjacent shallow selector
  //   // expect(component.html()).toContain('Alice');
  //   expect(component.html()).toContain('Name');
  // });
});