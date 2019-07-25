import React, { Component } from 'react';
import PropTypes from 'prop-types';

// set the prop types from predefined shapes or standard types
const propTypes = {
  label: PropTypes.string,
  btnStyle: PropTypes.oneOf(['grey', 'blue']),
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
  btnStyle: 'grey',
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
      <div className={`super-button ${btnStyle} ${className}`}>
        <button onClick={onClick}>
          {imgIcon}
          {label}
        </button>
      </div>
    );
  }
}

// set the props, defaults and export
SuperButton.propTypes = propTypes;
SuperButton.defaultProps = defaultProps;

export default SuperButton;
