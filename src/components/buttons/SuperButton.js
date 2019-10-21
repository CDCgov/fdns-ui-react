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
    'default-outlined',
    'primary-outlined',
    'secondary-outlined',
    'warning-outlined',
    'blue-on-blue',
    'blue-on-blue-inverse',
    'teal-on-teal',
    'teal-on-teal-inverse',
  ]),
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  iconAlt: PropTypes.string,
  onClick: PropTypes.func,
};

// set the defaults
const defaultProps = {
  label: 'Super Button',
  onClick() {},
};

// define the class
class SuperButton extends Component {
  // main render method
  render() {
    const { label, btnStyle, className, icon, iconAlt, onClick } = this.props;
    let imgIcon;

    // icon image if it's set
    if (icon !== undefined) imgIcon = <img src={icon} alt={iconAlt} />;

    return (
      <div id="super button" className={`super-button ${btnStyle} ${className}`}>
        <Button role="button" aria-label="super button" onClick={onClick}>
          {imgIcon}
          {label}
        </Button>
      </div>
    );
  }
}

// set the props, defaults and export
SuperButton.propTypes = propTypes;
SuperButton.defaultProps = defaultProps;

export default SuperButton;
