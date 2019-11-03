import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

// set the prop types from predefined shapes or standard types
const propTypes = {
  /** Controls whether or not the loader is active */
  active: PropTypes.bool,
};

// set the defaults
const defaultProps = {
  active: false,
};

// define the class
class Loader extends Component {
  render() {
    const { active } = this.props;

    let loader;
    if (active) {
      loader = (
        <div className="loader-active">
          <div className="loading-mask"></div>
          <div className="loading-message">
              <CircularProgress />
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
