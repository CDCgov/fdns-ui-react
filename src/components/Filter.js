import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, ControlLabel, FormControl } from 'react-bootstrap';
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
        <InputGroup.Addon>
          <FontAwesomeIcon icon={iconName} />
        </InputGroup.Addon>
      );
      controlClassName = 'with-icon';
    }

    const placeholder = this.props.placeholder || this.props.label;
    const defaultControl = (
      <FormControl
        aria-label={this.props.label}
        className={controlClassName}
        type="text"
        placeholder={placeholder}
        value={this.state.value}
        onChange={this.handleChange} />
    );
    const control = this.props.control || defaultControl;

    return (
      <div className="filter">
        <ControlLabel>{this.props.label}</ControlLabel>
        <InputGroup>
          {icon}
          {control}
        </InputGroup>
      </div>
    )
  }
}

// set the props, defaults and export
Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
