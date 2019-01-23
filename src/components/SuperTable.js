import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jsonpath from 'jsonpath';
import dig from 'object-dig';
import classNames from 'classnames';
import OptionAction from './OptionAction';
import OptionErrorsWarnings from './OptionErrorsWarnings';
import { _headers } from '../fixtures/shapes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Paper, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, Tooltip } from '@material-ui/core';

// set the prop types from predefined shapes or standard types
const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  headers: _headers,
  showErrorsAndWarnings: PropTypes.bool,
  showActions: PropTypes.bool,
  onDetail: PropTypes.func,
  width: PropTypes.number,
  getWidth: PropTypes.func,
  height: PropTypes.number,
  getHeight: PropTypes.func,
  actionsColumn: PropTypes.func,
  onColumnResize: PropTypes.func,
};

// set the defaults
const defaultProps = {
  data: [],
  headers: [],
  showErrorsAndWarnings: true,
  showActions: true,
  onDetail() {},
  width: 800,
  height: 800
};

// set default measurements
const defaultMmts = {
  minWidth: 50,
  width: 150,
  maxWidth: 500,
  rowHeight: 32
};

function dynamicSort(property, order) {
  let sortOrder = (order === 'asc') ? 1 : -1;
  return function (a,b) {
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}

function stableSort(array, order, orderBy) {
  const reducedOrderBy = orderBy.replace(/\$./i, ''); // remove the $. from the path string if it exits
  const newArray = array.sort(dynamicSort(reducedOrderBy, order));
  return newArray;
}

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy, rowCount, headers } = this.props;

    const renderErrorsAndWarningHeader = () => {
      if (!this.props.showErrorsAndWarnings) return;
      return (
        <TableCell
          key={'warning'}
          padding={'default'}
          className="super-table-header warning-cell"
        >
        </TableCell>
      )
    }

    const renderActionHeader = () => {
      if (!this.props.showActions) return;
      return (
        <TableCell
          key={'action'}
          padding={'default'}
          className="super-table-header"
        >
          Actions
        </TableCell>
      )
    }

    return (
      <TableHead>
        <TableRow>
          {renderErrorsAndWarningHeader()}
          {renderActionHeader()}
          {headers.map(header => {
            const { path, label, visible, icon:iconName, iconColor } = header;
            const iconStyle = {
              color: `#${iconColor}`,
            };
            return (
              <TableCell
                key={path}
                padding={'default'}
                sortDirection={orderBy === path ? order : false}
                className="super-table-header"
              >
                <Tooltip
                  title="Sort"
                  placement={'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === path}
                    direction={order}
                    onClick={this.createSortHandler(path)}
                  >
                    <FontAwesomeIcon className="header-icon" icon={iconName} style={iconStyle} />
                    {label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  headers: PropTypes.array.isRequired,
  showActions: PropTypes.bool,
  showErrorsAndWarnings: PropTypes.bool,
};

EnhancedTableHead.defaultProps = {
  showActions: true,
  showErrorsAndWarnings: true,
}

// define the class
class SuperTable extends Component {

  // init
  constructor(props) {
    super(props);
    this.state = {
      width: this.getWidth(),
      height: this.getHeight(),
      order: 'asc',
      orderBy: 'calories',
      data: this.props.data,
      page: 0,
      rowsPerPage: 5,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.getWidth = this.getWidth.bind(this);
    this.getHeight = this.getHeight.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
    // this.handleColumnResize = this.handleColumnResize.bind(this);
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  // called when an OptionAction is fired
  handleDetail(item) {
    if (this.props.onDetail) this.props.onDetail(item);
  }

  // mount add resize listener
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  // unmount remove listener
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  // call update dimensions
  updateDimensions() {
    this.setState({
      width: this.getWidth(),
      height: this.getHeight()
    });
  }

  // getter for the table width
  getWidth() {
    if (this.props.getWidth) return this.props.getWidth();
    return this.props.width;
  }

  // getter for the table height
  getHeight() {
    if (this.props.getHeight) return this.props.getHeight();
    return this.props.height;
  }

  renderRow (item) {
    const renderCell = (header, index) => {
      const cellContent = jsonpath.query(item, header.path);
      return (
        <TableCell key={index}>{cellContent}</TableCell>
      )
    }

    const renderErrorsAndWarnings = () => {
      if (!this.props.showErrorsAndWarnings) return;
      const analysis = dig(item, '_source', 'analysis');

      return (
        <TableCell key={`warning-${item.id}`} className="warning-cell">
          <OptionErrorsWarnings
            onDetail={this.handleDetail.bind(null, item)}
            updateErrorsAndWarnings={this.props.updateErrorsAndWarnings}
            analysis={analysis}
          />
        </TableCell>
      )
    }

    const renderAction = () => {
      if (!this.props.showActions) return;
      return (
        <TableCell key={`action-${item.id}`}>
          <OptionAction
            onDetail={this.handleDetail.bind(null, item)}
          />
        </TableCell>
      )
    }

    return (
      <TableRow
        hover
        tabIndex={-1}
        key={item.id}
      >
        {renderErrorsAndWarnings()}
        {renderAction()}
        {this.props.headers.map(renderCell)}
      </TableRow>
    )
  }

  // main render method
  render() {
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper>
        <div className="super-table">
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
              headers={this.props.headers}
              showErrorsAndWarnings={this.props.showErrorsAndWarnings}
              showActions={this.props.showActions}
            />
            <TableBody>
              {stableSort(data, order, orderBy)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  return this.renderRow(n);
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Paper>
    )
  }
}

// set the props, defaults and export
SuperTable.propTypes = propTypes;
SuperTable.defaultProps = defaultProps;

export default SuperTable;