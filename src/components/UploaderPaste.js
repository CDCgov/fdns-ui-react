import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { FormControl } from '@material-ui/core';
import IconButton from './IconButton';

// set the prop types from predefined shapes or standard types
const propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.string,
  onUpload: PropTypes.func,
  resetOnUpload: PropTypes.bool,
};

// set the defaults
const defaultProps = {
  placeholder: 'Paste here...',
  prefix: 'pasted-text-',
  onUpload() {},
  resetOnUpload: true,
};

// define the class
class UploaderDrop extends Component {

  // init
  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.reset = this.reset.bind(this);
    this.textareaRef = React.createRef();
  }

  // handle drop
  handleUpload() {
    let value = '';
    const textarea = this.textareaRef;
    if (textarea) value = textarea.current.value;

    // create file
    const date = new Date();
    const file = new Blob([value], { type: 'text/plain' });
    file.name = `${this.props.prefix}${date.getTime()}.txt`;
    file.lastModified = date;

    // reset
    if (this.props.resetOnUpload) this.reset();

    // trigger the onUpload event with the file
    this.props.onUpload(file);
  }

  // handle reset
  handleReset() {
    this.reset();
  }

  // reset the textarea
  reset() {
    const textarea = this.textareaRef.current;
    if (textarea) textarea.value = '';
  }

  // main render method
  render() {
    return (
      <div className="uploader-paste">
        <FormControl
          aria-label="Paste Text to Upload"
          component="textarea"
          placeholder={this.props.placeholder}
          ref={this.textareaRef}
        />
        <hr />
        <div className="icon-buttons pull-right">
          <IconButton icon="sync-alt" onClick={this.handleReset}>{'Reset'}</IconButton>
          <IconButton icon="paper-plane" color="primary" variant="contained" onClick={this.handleUpload}>{'Upload'}</IconButton>
        </div>
        <div className="clearfix"></div>
      </div>
    )
  }
}

// set the props, defaults and export
UploaderDrop.propTypes = propTypes;
UploaderDrop.defaultProps = defaultProps;

export default UploaderDrop;