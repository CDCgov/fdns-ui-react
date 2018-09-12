import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone'
import IconButton from './IconButton';

// set the prop types from predefined shapes or standard types
const propTypes = {
  accept: PropTypes.string,
  layout: PropTypes.string,
  onDrop: PropTypes.func,
};

// set the defaults
const defaultProps = {
  accept: 'text/plain',
  layout: 'default',
  onDrop() {},
};

// define the class
class UploaderDrop extends Component {

  // init
  constructor(props) {
    super(props);
    this.state = { 
      files: [],
    };
    this.handleDrop = this.handleDrop.bind(this);
  }

  // handle drop 
  handleDrop(acceptedFiles, rejectedFiles) {
    this.props.onDrop(acceptedFiles, rejectedFiles);
    this.setState({
      files: acceptedFiles,
    });
  }

  // render layout
  renderLayout() {
    const btnPrimary = (
      <IconButton icon="plus-square-o" bsStyle="primary">{'Add Files'}</IconButton>
    );

    // only return the button for small
    if (this.props.layout === 'button') {
      return btnPrimary;
    }

    return (
      <div className="instructions">
        <figure className="files"></figure>
        <h3>Drag and Drop or <a href="javascript:;">Browse</a> your files</h3>
        <p>{'Select one or more file at a time or simply drag and drop files anywhere on this page to start uploading.'}</p>
        {btnPrimary}
      </div>
    );
  }

  // main render method
  render() {
    const className = `uploader-drop ${this.props.layout}`;

    return (
      <div className={className}>
        <Dropzone 
          onDrop={this.handleDrop.bind(this)}
          accept={this.props.accept}
          className="uploader-drop-box"
          activeClassName="active"
          rejectClassName="reject">
          {this.renderLayout()}
        </Dropzone>
      </div>
    )
  }
}

// set the props, defaults and export
UploaderDrop.propTypes = propTypes;
UploaderDrop.defaultProps = defaultProps;

export default UploaderDrop;