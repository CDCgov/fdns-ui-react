import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { _headers } from '../../fixtures/shapes';
import jp from 'jsonpath';
import {
  Table as MUITable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
} from '@material-ui/core';
import TablePaginationActions from './TablePaginationActions';

// set the prop types from predefined shapes or standard types
const propTypes = {
  /** The rows of the table */
  rows: PropTypes.array,
  /** An array of Headers shapes to be used as the headers for the table */
  headers: PropTypes.array,
  /** Display pagination */
  pagination: PropTypes.bool,
  /** An array containing the options for the rows per page. It is not recommended you overwrite this value.  */
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
};

// set the defaults
const defaultProps = {
  rows: [],
  headers: [],
  pagination: false,
  rowsPerPageOptions: [5, 10, 25, 50],
};

// define the class
class SuperTable extends Component {
  state = {
    page: 0,
    rowsPerPage: 10,
  };

  renderStyle(width) {
    if (width) {
      return {
        width,
        minWidth: width,
        maxWidth: width,
      };
    }

    return {};
  }

  handleChangePage = (_, page) => {
    this.setState({
      page,
    });
  }

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
  }

  handleRowClick = (row, rowIndex) => {
    const { onRowClick } = this.props;

    if (onRowClick) {
      onRowClick(row, rowIndex);
    }
  }

  render() {
    const { headers, rows, pagination, rowsPerPageOptions } = this.props;
    const { page, rowsPerPage } = this.state;

    // slice the rows if needed
    let emptyRows = 0;
    let slicedRows = rows;
    if (pagination) {
      emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
      slicedRows = slicedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }

    return (
      <MUITable className="Table">
        <TableHead>
          <TableRow>
            {
              headers.map((header, i) => (
                <TableCell key={i} style={this.renderStyle(header.width)}>
                  {header.label}
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {slicedRows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {
                headers.map((header, colIndex) => {
                  // method for row click
                  const onRowClick = () => {
                    let allowRowClick = true;
                    if (header.allowRowClick === false) {
                      allowRowClick = false;
                    }
                    if (allowRowClick) {
                      this.handleRowClick(row, rowIndex);
                    }
                  };

                  // check for onRenderCell
                  if (header.onRenderCell) {
                    return (
                      <TableCell
                        key={colIndex}
                        style={this.renderStyle(header.width)}
                        onClick={onRowClick}
                      >
                        {header.onRenderCell(row, jp.value(row, header.path), rowIndex, colIndex)}
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell
                      key={colIndex}
                      style={this.renderStyle(header.width)}
                      onClick={onRowClick}
                    >
                      {jp.value(row, header.path)}
                    </TableCell>
                  );
                })
              }
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 48 * emptyRows }}>
              <TableCell colSpan={headers.length} />
            </TableRow>
          )}
        </TableBody>
        {
          pagination ? (
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={rowsPerPageOptions}
                  colSpan={headers.length}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          ) : null
        }
      </MUITable>
    );
  }
}

// set the props, defaults and export
SuperTable.propTypes = propTypes;
SuperTable.defaultProps = defaultProps;

export default SuperTable;