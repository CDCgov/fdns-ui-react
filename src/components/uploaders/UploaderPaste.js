import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { FormControl } from '@material-ui/core';
import IconButton from '../buttons/IconButton';

// set the prop types from predefined shapes or standard types
const propTypes = {
  /** Placeholder of the Paste Input */
  placeholder: PropTypes.string,
  /** Prefix for the paste option */
  prefix: PropTypes.string,
  /** onUpload event */
  onUpload: PropTypes.func,
  /** Reset the input on upload */
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
class UploaderPaste extends Component {

  // init
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
    }
  }

  // handle drop
  handleUpload = () => {
    if (this.state.textValue.length > 0) {
      const value = this.state.textValue;

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
  }

  // handle reset
  handleReset = () => {
    this.reset();
  }

  handleChange = (e) => {
    this.setState({
      textValue: e.target.value
    });
  }

  // reset the textarea
  reset = () => {
    this.setState({
      textValue: ''
    });
  }

  // main render method
  render() {
    return (
      <div className="uploader-paste">
        <FormControl
          aria-label="Paste Text to Upload"
          component="textarea"
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          value={this.state.textValue}
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
UploaderPaste.propTypes = propTypes;
UploaderPaste.defaultProps = defaultProps;

export default UploaderPaste;