import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import SuperGrid from '../../src/components/SuperGrid';
import { messages, headers } from '../../src/fixtures/fixtures';

describe('<SuperGrid />', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<SuperGrid data={messages} headers={headers} />);
  });

  // TODO: Update these as they don't work with this new shallow rendering
  // it('builds the grid with headers and mapped data', () => {
  //   const wrapper = shallow(<SuperGrid data={messages} headers={headers} />);
  //   expect(wrapper.html()).toContain('Alice');
  //   expect(wrapper.html()).toContain('Name');
  // });

  // it('uses the prop footer if passed', () => {
  //   const footer = (
  //     <div className="custom-footer"></div>
  //   );
  //   const customFooterGrid = shallow(
  //     <SuperGrid data={messages.splice(0,3)} headers={headers} footer={footer} />
  //   );

  //   expect(customFooterGrid.html()).toContain('custom-footer');
  // });
});