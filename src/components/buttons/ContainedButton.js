import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

// set the prop types from predefined shapes or standard types
const propTypes = {
  /** The text displayed in the button */
  label: PropTypes.string,
  /** The color of the button */
  btnStyle: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
  ]),
  /** onClick event function */
  onClick: PropTypes.func,
};

// set the defaults
const defaultProps = {
  label: 'Contained Button',
  btnStyle: 'default',
  onClick() {},
};

// define the class
class ContainedButton extends Component {
  // main render method
  render() {
    const { label, btnStyle, onClick } = this.props;

    return (
      // TODO: this div wrapper seems like the wrong way to build this button
      <div className={`ContainedButton ${btnStyle}`}>
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
