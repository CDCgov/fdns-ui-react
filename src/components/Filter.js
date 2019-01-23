import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input , InputLabel, InputAdornment, FormControl, FormControlLabel} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// default value for the filter
const defaultValue = '';

// set the prop types from predefined shapes or standard types
const propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  control: PropTypes.object
};

// set the defaults
const defaultProps = {
  value: defaultValue,
  label: 'Filter',
  placeholder: 'Placeholder'
};

// define the class
class Filter extends Component {

  // init
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
    this.apply = this.apply.bind(this);
  }

  // update the state on prop changes
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    })
  }

  // method to apply a filter
  apply() {
    return {
      value: this.state.value
    };
  }

  // method to reset a filter
  reset() {
    this.setState({
      value: defaultValue
    });
  }

  // method to handle the changes from the input / form control
  handleChange(event) {
    this.setState({
      value: event.target.value
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

    const placeholder = this.props.placeholder || this.props.label;

    return (
      <div className="filter">
        <FormControl
          className={controlClassName}
          fullWidth={true}
        >
          <InputLabel htmlFor="input-with-icon-adornment">{this.props.label}</InputLabel>
          <Input
            id="input-with-icon-adornment"
            placeholder={placeholder}
            value={this.state.value}
            onChange={this.handleChange}
            startAdornment={icon}
          />
        </FormControl>

      </div>
    )
  }
}

// set the props, defaults and export
Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
