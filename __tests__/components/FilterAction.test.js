import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import FilterAction from '../../src/components/filters/FilterAction';

describe('<FilterAction />', () => {
  var applied = false;
  function onApply () {
    applied = true;
  }

  var reset = false;
  function onReset () {
    reset = true;
  }

  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('renders', () => {
    const wrapper = shallow(<FilterAction onApply={onApply} onReset={onReset} />);
  });

  it('triggers the props apply event', () => {
    expect(applied).toBe(false);
    shallow(<FilterAction onApply={onApply} onReset={onReset} />).find('.filter-apply').simulate('click');
    expect(applied).toBe(true);
  });

  it('triggers the props clear event', () => {
    expect(reset).toBe(false);
    shallow(<FilterAction onApply={onApply} onReset={onReset} />).find('.filter-clear').simulate('click');
    expect(reset).toBe(true);
  });
});