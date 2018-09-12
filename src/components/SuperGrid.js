import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jsonpath from 'jsonpath';
import dig from 'object-dig';
import classNames from 'classnames';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import OptionAction from './OptionAction';
import OptionErrorsWarnings from './OptionErrorsWarnings';
import { _headers } from '../fixtures/shapes';

// set the prop types from predefined shapes or standard types
const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  headers: _headers,
  limit: PropTypes.number,
  onDetail: PropTypes.func,
  footer: PropTypes.object,
  showErrorsAndWarnings: PropTypes.bool,
  showActions: PropTypes.bool,
};

// set the defaults
const defaultProps = {
  data: [],
  headers: [],
  limit: 6,
  onDetail() {},
  showErrorsAndWarnings: true,
  showActions: true,
};

// define the class
class SuperGrid extends Component {

  // init
  constructor(props) {
    super(props);
    this.renderCell = this.renderCell.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
  }

  // called when an OptionAction is fired
  handleDetail(item) {
    if (this.props.onDetail) this.props.onDetail(item);
  }

  // render a row inside of a cell
  renderRow(item, header, count, headerIndex) { 
    const data = jsonpath.query(item, header.path);

    // set the class to first if we are the first row
    const className = classNames({
      first: (count === 1)
    });

    // the icon for the row
    const iconStyle = {
      color: `#${header.iconColor}`,
    };
    const icon = (
      <span aria-label={header.label}>
        <i className={`fa fa-${header.icon}`} style={iconStyle} />
      </span>
    );

    // TODO: investigate placing the tooltip in an auto-direction if it is too close to the edge of the window
    const tooltip = (
      <Tooltip id={`header-${count}-${headerIndex}`}>
        {header.label}
      </Tooltip>
    );

    return (
      <tr className={className} key={count}>
        <td className="text-left">
          <OverlayTrigger placement="top" overlay={tooltip}>
            {icon}
          </OverlayTrigger>
        </td>
        <td className="text-right" title={header.label}>
          <OverlayTrigger placement="top" overlay={tooltip}>
            <span className="data-element">
              {data}
            </span>
          </OverlayTrigger>
        </td>
      </tr>
    )
  }

  // render a cell
  renderCell(item, i) {
    const { showErrorsAndWarnings, showActions } = this.props;

    // use count instead of index because we have some that are invisible
    // this is to display only a certain number of rows depending on the limit prop
    var count = 0;

    // set the analysis object for OptionErrorsWarnings
    const analysis = dig(item, '_source', 'analysis');

    // create the cell with rows mapped to the headers
    const cell = this.props.headers.map((header, j) => {
      if (count >= this.props.limit) return;
      if (!header.visible) return;
      count++;
      return this.renderRow(item, header, count, j);
    });

    // set the default classnames
    const className = classNames({
      'table': true,
      'table-striped': true
    });

    // set errors and warnings if we are showing it
    let errorsAndWarnings;
    if (showErrorsAndWarnings) {
      errorsAndWarnings = (
        <OptionErrorsWarnings 
          onDetail={this.handleDetail.bind(null, item)}
          updateErrorsAndWarnings={this.props.updateErrorsAndWarnings}
          analysis={analysis} 
        />
      );
    }

    // set actions if we are showing it
    let actions;
    if (showActions) {
      actions = (
        <OptionAction onDetail={this.handleDetail.bind(null, item)} />
      );
    }

    // create a default footer
    const defaultFooter = (
      <div className="fx-grd">
        <div className="col-1">
          {errorsAndWarnings}
        </div>
        <div className="col-5" />
        <div className="col-1">
          {actions}
        </div>
      </div>
    );

    // set a footer if we have something to show 
    let footer;
    if (showErrorsAndWarnings || showActions || this.props.footer) {
      footer = (
        <div className="panel-footer">
          {(this.props.footer) ? this.props.footer : defaultFooter}
        </div>
      );
    }

    // return with the cell and surrounding markup
    return (
      <div className="grid-item" key={i}>
        <div className="panel panel-default">
          <div className="panel-body">
            <table className={className}>
              <tbody>
                {cell}
              </tbody>
            </table>
          </div>
          {footer}
        </div>
      </div>
    );
  }

  // main render method
  render() {
    return (
      <div className="grid">
        {this.props.data.map(this.renderCell)}
      </div>
    )
  }
}

// set the props, defaults and export
SuperGrid.propTypes = propTypes;
SuperGrid.defaultProps = defaultProps;

export default SuperGrid;