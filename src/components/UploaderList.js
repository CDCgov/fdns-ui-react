import React, { Component } from 'react';
import PropTypes from 'prop-types';

// set the prop types from predefined shapes or standard types
const _blob = PropTypes.instanceOf(Blob);
const propTypes = {
  files: PropTypes.arrayOf(_blob),
};

// set the defaults
const defaultProps = {
  files: [],
};

// define the class
class UploaderList extends Component {

  // render a file row
  renderRow(file, i) {
    const { name } = file;
    return (
      <li key={i}>
        <i className="fa fa-check-circle"></i>
        <span>{name}</span>
      </li>
    )
  }

  // main render method
  render() {
    return (
      <div className="uploader-list">
        <ul>
          {this.props.files.map(this.renderRow)}
        </ul>
      </div>
    )
  }
}

// set the props, defaults and export
UploaderList.propTypes = propTypes;
UploaderList.defaultProps = defaultProps;

export default UploaderList;