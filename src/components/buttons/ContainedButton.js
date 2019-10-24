import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

// set the prop types from predefined shapes or standard types
const propTypes = {
  label: PropTypes.string,
  btnStyle: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

// set the defaults
const defaultProps = {
  label: 'Contained Button',
  onClick() {},
};

// define the class
class ContainedButton extends Component {
  // main render method
  render() {
    const { label, btnStyle, className, onClick } = this.props;

    return (
      <div id="Contained Button" className={`ContainedButton ${btnStyle} ${className}`}>
        <Button role="button" aria-label="Contained Button" onClick={onClick}>
          {label}
        </Button>
      </div>
    );
  }
}

// set the props, defaults and export
ContainedButton.propTypes = propTypes;
ContainedButton.defaultProps = defaultProps;

export default ContainedButton;
