import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';
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
  }

  // handle drop
  handleUpload() {
    let value = '';
    const textarea = ReactDOM.findDOMNode(this.refs.textarea);
    if (textarea) value = textarea.value;

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
    const textarea = ReactDOM.findDOMNode(this.refs.textarea);
    if (textarea) textarea.value = '';
  }

  // main render method
  render() {
    return (
      <div className="uploader-paste">
        <FormControl
          aria-label="Paste Text to Upload"
          componentClass="textarea"
          placeholder={this.props.placeholder}
          ref="textarea"
        />
        <hr />
        <div className="icon-buttons pull-right">
          <IconButton icon="refresh" bsStyle="clear" onClick={this.handleReset}>{'Reset'}</IconButton>
          <IconButton icon="send" bsStyle="primary" onClick={this.handleUpload}>{'Upload'}</IconButton>
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