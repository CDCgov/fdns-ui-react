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
    expect(component.find('.pane-title').children().children().text()).toContain('foo');
    expect(component.find('.pane-subtitle').children().children().text()).toContain('bar');
  });

  describe('is collapsable', () => {
    it('collapses', () => {
      component.setProps({ collapsed: true });
      expect(component.find('div.pane').hasClass('collapsed')).toBe(true);
    });

    it('uncollapses', () => {
      component.setProps({ collapsed: false });
      expect(component.find('div.pane').hasClass('collapsed')).toBe(false);
    });

    it('renders the children on uncollapse', () => {
      component.setProps({ collapsed: false });
      expect(component.find('#foo').text()).toBe('bar');
    });

    it('calls the onCollapse event if passed', () => {
      var query = '';
      var onCollapse = (event, props) => {
        query = props.title;
      }

      component.setProps({ collapsed: false, onCollapse: onCollapse });
      expect(query).toBe('');
      component.find('button.collapse').simulate('click');
      expect(query).toBe('foo');
    })
  });
});