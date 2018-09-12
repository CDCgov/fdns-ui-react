import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormControl } from 'react-bootstrap';

// set the prop types from predefined shapes or standard types
const propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

// set the defaults
const defaultProps = {
  label: 'My Label',
  value: '',
  placeholder: 'Placeholder',
  onChange() {},
};

// define the class
class SuperInput extends Component {
  // main render method
  render() {
    const { label, type, value, placeholder, onChange } = this.props;

    return (
      <div className="super-input">
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          aria-label={label}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
}

// set the props, defaults and export
SuperInput.propTypes = propTypes;
SuperInput.defaultProps = defaultProps;

export default SuperInput;
