import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

// set the prop types from predefined shapes or standard types
const propTypes = {
  onDetail: PropTypes.func,
  onOption: PropTypes.func,
  showOption: PropTypes.bool,
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
        <Button onClick={this.handleDetailClick} aria-label="Show Detail">
          <i className="fa fa-file-code-o"></i>
        </Button>
      );
    }
  }

  // render the option button if we are showing it
  renderOption() {
    if (this.props.showOption) {
      return (
        <Button onClick={this.handleOptionClick} aria-label="Show Option">
          <i className="fa fa-cog"></i>
        </Button>
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