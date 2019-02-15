import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@material-ui/core';

import { _option } from '../fixtures/shapes';
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
  options: []
};

// this method gets a rough measurement of the labelWidth for the OutlinedInput
// TODO: should probably dump the OutlinedInput and use a TextField select instead which would render this unnecessary
// using an OutlinedInput currently because it has InputAdornment by default
function getTextWidth(text, font) {
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    // this calculation doesn't lead to a number that fits MUI's labelWidth number exactly so we use a multiplier to get a better estimate
    return metrics.width * 1.6;
}

// define the class
class FilterSelect extends Component {

  // init
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected || '',
      labelWidth: getTextWidth(this.props.label, "Roboto 16pt"),
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
          <InputLabel
            htmlFor={`outlined-select-input-${this.props.label}`}
          >
            {this.props.label}
          </InputLabel>
          <Select
            value={this.state.selected}
            onChange={this.handleChange}
            displayEmpty={true}
            input={
              <OutlinedInput
                name={this.props.label}
                id={`outlined-select-input-${this.props.label}`}
                labelWidth={this.state.labelWidth}
                startAdornment= {icon}
              />
            }
          >
            <MenuItem value="" className="select-menu-item">
              <em>Select...</em>
            </MenuItem>
            {this.props.options.map(option => {
              return (
                <MenuItem key={option.value} value={option.value} className="select-menu-item">
                  {option.label}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </div>
    )
  }
}

// set the props, defaults and export
FilterSelect.propTypes = propTypes;
FilterSelect.defaultProps = defaultProps;

export default FilterSelect;