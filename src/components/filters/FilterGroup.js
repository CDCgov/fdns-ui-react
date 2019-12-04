
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterAction from './FilterAction';

// set the prop types from predefined shapes or standard types
const propTypes = {
  /** onApply event */
  onApply: PropTypes.func,
  /** onReset event */
  onReset: PropTypes.func
};

// set the defaults
const defaultProps = {};

// define the class
class FilterGroup extends Component {

  // init
  constructor(props) {
    super(props);
    this.handleApply = this.handleApply.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // method to handle the apply
  handleApply() {
    var data = {};

    // iterate through the filters and trigger apply
    Object.keys(this.refs).map((key) => {
      const filter = this.refs[key];
      var value = {};
      if (typeof(filter.apply) === 'function') value = filter.apply();

      data[key] = value;
    });

    // call the props method if we have it
    if (this.props.onApply) this.props.onApply(data);
  }

  // handle the reset
  handleReset() {
    // iterate through the filters and trigger reset
    Object.keys(this.refs).forEach((key) => {
      const filter = this.refs[key];
      if (typeof(filter.reset) === 'function') filter.reset();
    });

    // call the props method if we have it
    if (this.props.onReset) this.props.onReset();
  }

  // handle the submit from the form
  handleSubmit(event) {
    event.preventDefault();
    this.handleApply();
  }

  // main render method
  render() {
    var childrenWithProps = this.props.children;
    if (childrenWithProps.length > 0) {
      childrenWithProps = this.props.children.map((child, index) => {
        const ref = child.ref || 'filter' + index;
        return React.cloneElement(child, { ref, key: index });
      });
    }

    return (
      <div className="filter-group">
        <form onSubmit={this.handleSubmit}>
          {childrenWithProps}
          <FilterAction onApply={this.handleApply} onReset={this.handleReset} />
          <input type="submit" className="hidden" />
        </form>
      </div>
    )
  }
}

// set the props, defaults and export
FilterGroup.propTypes = propTypes;
FilterGroup.defaultProps = defaultProps;

export default FilterGroup;