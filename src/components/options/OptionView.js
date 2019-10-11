import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '@material-ui/core';

// set the prop types from predefined shapes or standard types
const propTypes = {
  selected: PropTypes.string,
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

    return (
      <div className="option-view">
        <Button
          aria-label="Grid View"
          onClick={this.handleSelection.bind(this, 'super-grid')}
          disableRipple={true}
        >
          <span className={gridClassName}></span>
        </Button>
        <Button
          aria-label="Table View"
          onClick={this.handleSelection.bind(this, 'super-table')}
          disableRipple={true}
        >
          <span className={tableClassName}></span>
        </Button>
        <Button
          aria-label="Graph View"
          disabled={true}
          disableRipple={true}
        >
          <span className="icon-super-chart"></span>
        </Button>
      </div>
    )
  }
}

// set the props, defaults and export
OptionView.propTypes = propTypes;
OptionView.defaultProps = defaultProps;

export default OptionView;