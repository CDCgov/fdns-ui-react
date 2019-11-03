import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, ButtonGroup } from '@material-ui/core';
import GridOnIcon from '@material-ui/icons/GridOn';
import MenuIcon from '@material-ui/icons/Menu';
import TimelineIcon from '@material-ui/icons/Timeline';

// set the prop types from predefined shapes or standard types
const propTypes = {
  /** Selected Option */
  selected: PropTypes.string,
  /** onChange event */
  onChange: PropTypes.func
};

// set the defaults
const defaultProps = {
  selected: 'super-table'
};

// define the class
class OptionView extends Component {

  // init
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected
    }
    this.handleSelection = this.handleSelection.bind(this);
  }

  // handle a general selection
  handleSelection(selected) {
    this.setState({
      selected
    });

    if (this.props.onChange) this.props.onChange(selected);
  }

  render() {
    const gridClassName = classNames({
      'icon-super-grid': true,
      'active': (this.state.selected === 'super-grid')
    });

    const tableClassName = classNames({
      'icon-super-table': true,
      'active': (this.state.selected === 'super-table')
    });

    const graphClassName = classNames({
      'icon-super-graph': true,
      'active': (this.state.selected === 'super-graph')
    });

    return (
      <ButtonGroup className="option-view">
        <Button
          className={gridClassName}
          aria-label="Grid View"
          onClick={this.handleSelection.bind(this, 'super-grid')}
          disableRipple={true}
        >
          <GridOnIcon className='icon'/>
        </Button>
        <Button
          className={tableClassName}
          aria-label="Table View"
          onClick={this.handleSelection.bind(this, 'super-table')}
          disableRipple={true}
        >
          <MenuIcon className='icon'/>
        </Button>
        <Button
          aria-label="Graph View"
          className={graphClassName}
          onClick={this.handleSelection.bind(this, 'super-graph')}
          disableRipple={true}
        >
          <TimelineIcon className='icon'/>
        </Button>
      </ButtonGroup>
    )
  }
}

// set the props, defaults and export
OptionView.propTypes = propTypes;
OptionView.defaultProps = defaultProps;

export default OptionView;