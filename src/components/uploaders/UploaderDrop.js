import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone'
import IconButton from '../buttons/IconButton';

// set the prop types from predefined shapes or standard types
const propTypes = {
  /** String type of files this can accept */
  accept: PropTypes.string,
  /** Type of layout */
  layout: PropTypes.string,
  /** onDrop event if you want to do anything after the files are dropped into the list. AcceptedFiles, RejectedFiles are the arguments accepted. */
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
  _isMounted = false;

  // init
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  // handle drop
  handleDrop(acceptedFiles, rejectedFiles) {
    this.props.onDrop(acceptedFiles, rejectedFiles);
    if (this._isMounted) {
      this.setState({
        files: acceptedFiles,
      });
    }
  }

  // render layout
  renderLayout() {
    const btnPrimary = (
      <IconButton icon={['far', 'plus-square']} color="primary" variant="contained">{'Add Files'}</IconButton>
    );

    // only return the button for small
    if (this.props.layout === 'button') {
      return btnPrimary;
    }

    return (
      <div className="instructions">
        <figure className="files"></figure>
        <Typography variant="h3" color="inherit" gutterBottom>Drag and Drop or <a href="javascript:;">Browse</a> your files</Typography>
        <Typography color="inherit" gutterBottom>Select one or more file at a time or simply drag and drop files anywhere on this page to start uploading.</Typography>
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