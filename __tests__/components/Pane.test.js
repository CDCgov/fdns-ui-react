import React from 'react';
import { mount } from 'enzyme';
import Pane from '../../src/components/layouts/Pane';

describe('<Pane />', () => {
  const component = mount(
    <Pane title="foo" subtitle="bar">
      <p id="foo">bar</p>
    </Pane>
  );

  it('renders', () => {
    expect(component.html()).toContain('pane');
    expect(component.html()).toContain('button');

    // MUI's Typography forces you to pull the children to make these tests pass
    expect(component.find('.pane-title').children().first().text()).toContain('foo');
    expect(component.find('.pane-subtitle').children().first().text()).toContain('bar');
  });
});