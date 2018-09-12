import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Inspector from 'react-json-inspector';

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

    const tooltip = (
      <Tooltip id="print-tooltip">
        {'Click here to print'}
      </Tooltip>
    );

    const printButton = (
      <OverlayTrigger placement="top" overlay={tooltip}>
        <Button
          aria-label="Print"
          onClick={this.handlePrintClick}
          className="print"
        >
          <i className="fa fa-print"></i>
        </Button>
      </OverlayTrigger>
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
        <i className="fa fa-times"></i>
      </Button>
    );

    return (
      <div className="data-inspector">
        {this.renderPrintButton()}
        {closeButton}
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