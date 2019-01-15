import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip } from '@material-ui/core';
import Inspector from 'react-json-inspector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// set the prop types from predefined shapes or standard types
const propTypes = {
  data: PropTypes.object,
  onPrint: PropTypes.func,
  showPrint: PropTypes.bool,
  onClose: PropTypes.func
};

// set the defaults
const defaultProps = {
  data: {},
  showPrint: true
};

// custom search inputs
class SearchBar extends React.Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <input
        aria-label="Search Data"
        className="json-inspector__search"
        type="search"
        placeholder="Search"
        onChange={this.handleChange}
        {...this.props}
      />
    );
  }
}
SearchBar.propTypes = {
  onChange: PropTypes.func,
};
SearchBar.defaultProps = {
  onChange() {},
};

// define the class
class DataInspector extends Component {

  // init
  constructor(props) {
    super(props);
    this.handlePrintClick = this.handlePrintClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.renderPrintButton = this.renderPrintButton.bind(this);
  }

  // handle print click
  handlePrintClick(event) {
    if (this.props.onPrint) return this.props.onPrint();
    return window.print();
  }

  // handle the close click
  handleCloseClick(event) {
    if (this.props.onClose) return this.props.onClose();
    return console.log(event);
  }

  // render method for the print button
  renderPrintButton() {
    if (!this.props.showPrint) return;

    const printButton = (
      <Tooltip id="print-tooltip" title={'Click here to print'} placement="top">
        <Button
          aria-label="Print"
          onClick={this.handlePrintClick}
          className="print"
        >
          <FontAwesomeIcon icon="print" />
        </Button>
      </Tooltip>
    );

    return printButton;
  }

  // main render method
  render() {
    const closeButton = (
      <Button
        aria-label="Close"
        onClick={this.handleCloseClick}
        className="close"
      >
        <FontAwesomeIcon icon="times" />
      </Button>
    );

    return (
      <div className="data-inspector">
        <div className="data-inspector-buttons">
          {this.renderPrintButton()}
          {closeButton}
        </div>
        <Inspector
          search={SearchBar}
          data={this.props.data}
        />
      </div>
    )
  }
}

// set the props, defaults and export
DataInspector.propTypes = propTypes;
DataInspector.defaultProps = defaultProps;

export default DataInspector;