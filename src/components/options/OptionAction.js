import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import SettingsIcon from '@material-ui/icons/Settings';

// set the prop types from predefined shapes or standard types
const propTypes = {
  /** onDetail click event */
  onDetail: PropTypes.func,
  /** onOption click event */
  onOption: PropTypes.func,
  /** Show the option button */
  showOption: PropTypes.bool,
  /** Show the detail button */
  showDetail: PropTypes.bool,
};

// set the defaults
const defaultProps = {
  onDetail() {},
  onOption() {},
  showOption: false,
  showDetail: true,
};

// define the class
class OptionAction extends Component {

  // init
  constructor(props) {
    super(props);
    this.handleDetailClick = this.handleDetailClick.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
    this.renderOption = this.renderOption.bind(this);
  }

  // detail click event
  handleDetailClick(event) {
    this.props.onDetail();
  }

  // option click event
  handleOptionClick(event) {
    this.props.onOption();
  }

  // render the detail button if we are showing it
  renderDetail() {
    if (this.props.showDetail) {
      return (
        <IconButton onClick={this.handleDetailClick} size="medium" aria-label="Show Detail" alt="Show Detail">
          <DeveloperModeIcon />
        </IconButton>
      );
    }
  }

  // render the option button if we are showing it
  renderOption() {
    if (this.props.showOption) {
      return (
        <IconButton onClick={this.handleOptionClick} size="medium" aria-label="Show Option" alt="Show Option">
          <SettingsIcon />
        </IconButton>
      );
    }
  }

  // main render method
  render() {
    return (
      <div className="option-action">
        {this.renderDetail()}
        {this.renderOption()}
      </div>
    );
  }
}

// set the props, defaults and export
OptionAction.propTypes = propTypes;
OptionAction.defaultProps = defaultProps;

export default OptionAction;