import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

// set the prop types from predefined shapes or standard types
const propTypes = {
  /** The text contained in the button */
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
  /** An optional custom image string */
  icon: PropTypes.string,
  /** Accessibility alt name for the custom image string */
  iconAlt: PropTypes.string,
  /** onClick event, default does nothing */
  onClick: PropTypes.func,
};

// set the defaults
const defaultProps = {
  label: 'Super Button',
  btnStyle: 'default',
  iconAlt: 'custom image icon',
  onClick() {},
};

// define the class
class SuperButton extends Component {
  // main render method
  render() {
    const { label, btnStyle, icon, iconAlt, onClick } = this.props;
    let imgIcon;

    // icon image if it's set
    if (icon !== undefined) imgIcon = <img src={icon} alt={iconAlt} />;

    return (
      <div id="super button" className={`super-button ${btnStyle}`}>
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
