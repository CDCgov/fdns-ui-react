import React, { Component } from 'react';
import PropTypes from 'prop-types';

// set the prop types from predefined shapes or standard types
const propTypes = {
  style: PropTypes.string,
};

// set the defaults
const defaultProps = {};

// define the class
class Container extends Component {

  // main render method
  render() {
    return (
      <div className="Container" style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}

// set the props, defaults and export
Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;