import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { InputGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { _option } from '../fixtures/shapes';

// set the prop types from predefined shapes or standard types
const propTypes = {
  selected: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(_option)
};

// set the defaults
const defaultProps = {
  selected: '',
  label: 'My Select Filter',
  options: []
};

// define the class
class FilterSelect extends Select {
  
  // init
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // update the state on prop changes
  componentWillReceiveProps(nextProps) {
    this.setState({
      selected: nextProps.value
    });
  }

  // method to handle the changes from the filter
  handleChange(selection) {
    var value = (selection === null) ? null : selection.value;
    this.setState({
      selected: value
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
      const iconName = 'fa fa-' + this.props.icon;
      icon = (
        <InputGroup.Addon>
          <i className={iconName}></i>
        </InputGroup.Addon>
      );
      controlClassName = 'with-icon';
    }

    return (
      <div className="filter filter-select">
        <ControlLabel>{this.props.label}</ControlLabel>
        <InputGroup>
          {icon}
          <Select 
            aria-label={this.props.label}
            name="filter-select" 
            value={this.state.selected}
            placeholder={this.props.placeholder}
            options={this.props.options} 
            onChange={this.handleChange}
            className={controlClassName} />
        </InputGroup>
      </div>
    )
  }
}

// set the props, defaults and export
FilterSelect.propTypes = propTypes;
FilterSelect.defaultProps = defaultProps;

export default FilterSelect;