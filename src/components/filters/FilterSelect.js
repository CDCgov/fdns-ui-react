import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@material-ui/core';

import { _option } from '../../fixtures/shapes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// set the prop types from predefined shapes or standard types
const propTypes = {
  selected: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(_option)
};

// set the defaults
const defaultProps = {
  selected: '',
  label: 'My Select Filter',
  options: [],
  placeholder: 'Select...'
};

// define the class
class FilterSelect extends Component {

  // init
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected || '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  // method to handle the changes from the filter
  handleChange(event) {
    const selection = event.target.value;
    var value = (selection === null) ? null : selection;
    this.setState({
      selected: value,
    });
  }

  // method to apply a filter
  apply() {
    var value = '';
    if (this.state.selected) value = this.state.selected;
    return {
      value
    }
  }

  // method to reset a filter
  reset() {
    this.setState({
      selected: ''
    });
  }

  // main render method
  render() {
    var icon, controlClassName;
    if (this.props.icon !== undefined) {
      const iconName = this.props.icon;
      icon = (
        <InputAdornment position="start">
          <FontAwesomeIcon icon={iconName} />
        </InputAdornment>
      );
      controlClassName = 'with-icon';
    }

    return (
      <div className="filter filter-select">
        <FormControl
          variant="outlined"
          className={controlClassName}
          fullWidth={true}
        >
          <TextField
            id={`outlined-select-input-${this.props.label}`}
            select
            label={this.props.label}
            value={this.state.selected}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: icon,
            }}
          >
            <MenuItem value="" className="select-menu-item">
              <em>{this.props.placeholder}</em>
            </MenuItem>
            {this.props.options.map(option => {
              return (
                <MenuItem key={option.value} value={option.value} className="select-menu-item">
                  {option.label}
                </MenuItem>
              )
            })}
          </TextField>
        </FormControl>
      </div>
    )
  }
}

// set the props, defaults and export
FilterSelect.propTypes = propTypes;
FilterSelect.defaultProps = defaultProps;

export default FilterSelect;