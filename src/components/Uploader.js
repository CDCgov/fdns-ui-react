import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UploaderPaste from './UploaderPaste';
import UploaderList from './UploaderList';
import UploaderDrop from './UploaderDrop';
import IconButton from './IconButton';
import { Grid } from '@material-ui/core';

// set the prop types from predefined shapes or standard types
const propTypes = {
  checkDuplicates: PropTypes.bool,
  onError: PropTypes.func,
};

// set the defaults
const defaultProps = {
  checkDuplicates: true,
  onError() {},
};

// define the class
class Uploader extends Component {

  // init
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      fileNames: [],
    };
    this.handlePasteUpload = this.handlePasteUpload.bind(this);
    this.handleDropUpload = this.handleDropUpload.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // handle paste
  handlePasteUpload(file) {
    let newFiles = this.state.files;
    let newFileNames = this.state.fileNames;

    newFileNames.push(file.name);
    newFiles.push(file);
    this.setState({
      files: newFiles,
      fileNames: newFileNames,
    });
  }

  // handle drop
  handleDropUpload(files) {
    let newFileNames = this.state.fileNames;

    // look for duplicates or just add file names
    try {
      files.forEach((file) => {
        if (this.props.checkDuplicates) if (this.state.fileNames.indexOf(file.name) >= 0) throw new Error('Duplicate file detected');
        newFileNames.push(file.name);
      });
    } catch (err) {
      return this.props.onError(err)
    }

    const newFiles = this.state.files.concat(files);
    return this.setState({
      files: newFiles,
      fileNames: newFileNames,
    });
  }

  // handle reset
  handleReset() {
    this.reset();
  }

  // reset
  reset() {
    this.setState({
      files: [],
      fileNames: [],
    });
  }

  // render the uploader or list
  renderDropOrList() {
    if (this.state.files.length > 0) {
      return (
        <div className="uploader-list-box">
          <UploaderList files={this.state.files} />
          <hr />
          <div className="icon-buttons pull-right">
            <IconButton icon="sync-alt" bsStyle="clear" onClick={this.handleReset}>{'Reset'}</IconButton>
            <UploaderDrop layout="button" onDrop={this.handleDropUpload} />
          </div>
          <div className="clearfix"></div>
        </div>
      );
    }

    return (
      <UploaderDrop onDrop={this.handleDropUpload} />
    );
  }

  // main render method
  render() {
    return (
      <Grid className="uploader" >
        <Grid container className="row" spacing={32}>
          <Grid item className="uploader-column" xs={6}>
            <UploaderPaste onUpload={this.handlePasteUpload} />
          </Grid>
          <Grid item className="uploader-column" xs={6}>
            {this.renderDropOrList()}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

// set the props, defaults and export
Uploader.propTypes = propTypes;
Uploader.defaultProps = defaultProps;

export default Uploader;