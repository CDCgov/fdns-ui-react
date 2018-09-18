import React, { Component } from 'react';
import PropTypes from 'prop-types';

// set the prop types from predefined shapes or standard types
const propTypes = {
  message: PropTypes.string,
  active: PropTypes.bool,
};

// set the defaults
const defaultProps = {
  message: 'Loading...',
  active: false,
};

// define the class
class Loader extends Component {
  render() {
    const { message, active } = this.props;

    let loader;
    if (active) {
      loader = (
        <div className="loader-active">
          <div className="loading-mask"></div>
          <div className="loading-message">
            {/*TODO: Switch this over to FA */}
            <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
            <div className="message-wrapper">
              {message}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="loader">{loader}</div>
    );
  }
}

// set the props, defaults and export
Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
