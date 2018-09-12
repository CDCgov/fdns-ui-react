import React from 'react';
import { shallow } from 'enzyme';
import FilterAction from '../../src/components/FilterAction';

describe('<FilterAction />', () => {
  var applied = false;
  function onApply () {
    applied = true;
  }

  var reset = false;
  function onReset () {
    reset = true;
  }

  const component = shallow(
    <FilterAction onApply={onApply} onReset={onReset} />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('filter-action');
  });

  it('triggers the props apply event', () => {
    expect(applied).toBe(false);
    component.find('.filter-apply').simulate('click');
    expect(applied).toBe(true);
  });

  it('triggers the props clear event', () => {
    expect(reset).toBe(false);
    component.find('.filter-clear').simulate('click');
    expect(reset).toBe(true);
  });
});