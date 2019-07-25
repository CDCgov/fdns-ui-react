import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '../buttons/IconButton';

// set the prop types from predefined shapes or standard types
const propTypes = {
  onApply: PropTypes.func,
  onReset: PropTypes.func
};

// set the defaults
const defaultProps = {};

// define the class
class FilterAction extends Component {

  // init
  constructor(props) {
    super(props);
    this.handleApplyClick = this.handleApplyClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  // method to handle the apply click event
  handleApplyClick(event) {
    if (this.props.onApply) this.props.onApply();
  }

  // method to handle the reset click event
  handleResetClick(event) {
    if (this.props.onReset) this.props.onReset();
  }

  // main render method
  render() {
    return (
      <div className="filter-action">
        <IconButton className="filter-apply" color="primary" variant="contained" icon="check" onClick={this.handleApplyClick}>{'Apply'}</IconButton>
        <IconButton className="filter-clear" variant="outlined" icon="sync-alt" onClick={this.handleResetClick}>{'Reset'}</IconButton>
      </div>
    )
  }
}

// set the props, defaults and export
FilterAction.propTypes = propTypes;
FilterAction.defaultProps = defaultProps;

export default FilterAction;