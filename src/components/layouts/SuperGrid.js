import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dig from 'object-dig';
import classNames from 'classnames';
import ArrowTooltip from '../utils/ArrowTooltip';

import OptionAction from '../options/OptionAction';
import OptionErrorsWarnings from '../options/OptionErrorsWarnings';
import { _headers } from '../../fixtures/shapes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

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
    const dataKey = header.path.replace(/\$./i, '');
    const data = item[dataKey];

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
        <FontAwesomeIcon icon={header.icon} style={iconStyle} />
      </span>
    );

    return (
      <TableRow className={className} key={count}>
        <TableCell>
          <ArrowTooltip id={`header-${count}-${headerIndex}`} title={header.label} placement="top">
            {icon}
          </ArrowTooltip>
        </TableCell>
        <TableCell align="right" title={header.label}>
          <ArrowTooltip id={`header-${count}-${headerIndex}`} title={header.label} placement="top">
            <span className="data-element">
              {data}
            </span>
          </ArrowTooltip>
        </TableCell>
      </TableRow>
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
          size={'small'}
        />
      );
    }

    // set actions if we are showing it
    let actions;
    if (showActions) {
      actions = (
        <OptionAction onDetail={this.handleDetail.bind(null, item)} size={'small'} />
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
      <Grid item className="grid-item" key={i}>
        <Paper className="panel panel-default" elevation={4}>
          <div className="panel-body">
            <Table className={className}>
              <TableBody>
                {cell}
              </TableBody>
            </Table>
          </div>
          {footer}
        </Paper>
      </Grid>
    );
  }

  // main render method
  render() {
    return (
      <Grid className="super-grid" container>
        {this.props.data.map(this.renderCell)}
      </Grid>
    )
  }
}

// set the props, defaults and export
SuperGrid.propTypes = propTypes;
SuperGrid.defaultProps = defaultProps;

export default SuperGrid;