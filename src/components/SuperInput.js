import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

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
        <TextField
          aria-label={label}
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          fullWidth={true}
          margin="normal"
        />
      </div>
    );
  }
}

// set the props, defaults and export
SuperInput.propTypes = propTypes;
SuperInput.defaultProps = defaultProps;

export default SuperInput;
