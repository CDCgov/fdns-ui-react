import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from '@material-ui/core';
import { _analysis } from '../../fixtures/shapes';
import BlockIcon from '@material-ui/icons/Block';
import WarningIcon from '@material-ui/icons/Warning';

// set the prop types from predefined shapes or standard types
const propTypes = {
  analysis: _analysis,
  onDetail: PropTypes.func,
  updateErrorsWarnings: PropTypes.func,
  size: PropTypes.string,
};

// set the defaults
const defaultProps = {
  analysis: {
    valid: true,
    warnings: 0,
    explanation: [],
    errors: 0,
  },
  onDetail() {},
  size: 'medium',
};

// define the class
class OptionErrorsWarnings extends Component {

  // init
  constructor(props) {
    super(props);
    this.updateErrorsWarnings = this.updateErrorsWarnings.bind(this);
    this.handleDetailClick = this.handleDetailClick.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderWarnings = this.renderWarnings.bind(this);
  }

  // call an external method to extract arrays of errors and warnings
  updateErrorsWarnings() {
    if (this.props.updateErrorsWarnings === undefined) return;
    if (this.props.analysis.explanation.length === 0) return;

    const errors   = [];
    const warnings = [];

    // search through the explanation and put all errors in an array
    this.props.analysis.explanation.forEach((explanation, index) => {
      if (explanation.type !== 'ERROR') return;

      errors.push({
        category: explanation.category,
        key: explanation.ID,
        description: explanation.title
      });
    });

    // search through the explanation and put all warnings in an array
    this.props.analysis.explanation.map((explanation, index) => {
      if (explanation.type !== 'WARNING') return;

      warnings.push({
        category: explanation.category,
        key: explanation.ID,
        description: explanation.title
      });
    });

    // return with the arrays
    this.props.updateErrorsWarnings(errors, warnings);
  }

  // called when either an error or warning button is clicked
  handleDetailClick(event) {
    this.updateErrorsWarnings();
    this.props.onDetail();
  }

  // render method to display (or not display) the errors button based on the analysis
  renderErrors() {
    const { errors } = this.props.analysis;

    // if we have errors then let's display the button
    if (errors > 0) {
      // tooltip requires a unique id
      const nonce = Math.round((Math.random() * 9999999999) + 1000000000);

      return (
        <Tooltip id={`tooltip-error-${nonce}`} title={`${errors} Errors`} placement="left">
          <IconButton
            aria-label="Errors Detail"
            alt="Errors"
            className="option-error"
            onClick={this.handleDetailClick}
            size={this.props.size}
          >
            <BlockIcon />
          </IconButton>
        </Tooltip>
      )
    }
  }

  // render method to display (or not display) the warnings button based on the analysis
  renderWarnings() {
    const { warnings } = this.props.analysis;

    // if we have warnings then let's display the button
    if (warnings > 0) {
      // tooltip requires a unique id
      const nonce = Math.round((Math.random() * 9999999999) + 1000000000);

      return (
        <Tooltip id={`tooltip-warning-${nonce}`} title={`${warnings} Warnings`} placement="left">
          <IconButton
            aria-label="Warnings Detail"
            alt="Warnings"
            className="option-warning"
            onClick={this.handleDetailClick}
            size={this.props.size}
          >
            <WarningIcon />
          </IconButton>
        </Tooltip>
      )
    }
  }

  // main render method
  render() {
    return (
      <div className="option-errors-warnings">
        {this.renderErrors()}
        {this.renderWarnings()}
      </div>
    )
  }
}

// set the props, defaults and export
OptionErrorsWarnings.propTypes = propTypes;
OptionErrorsWarnings.defaultProps = defaultProps;

export default OptionErrorsWarnings;
