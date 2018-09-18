import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jsonpath from 'jsonpath';
import dig from 'object-dig';
import classNames from 'classnames';
import { Table, Column, Cell } from 'fixed-data-table-2';
import OptionAction from './OptionAction';
import OptionErrorsWarnings from './OptionErrorsWarnings';
import { _headers } from '../fixtures/shapes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

// define the class
class SuperTable extends Component {

  // init
  constructor(props) {
    super(props);
    this.state = {
      columnWidths: [],
      width: this.getWidth(),
      height: this.getHeight()
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.getWidth = this.getWidth.bind(this);
    this.getHeight = this.getHeight.bind(this);
    this.handleColumnResize = this.handleColumnResize.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
    this.renderCell = this.renderCell.bind(this);
    this.renderColumn = this.renderColumn.bind(this);
    this.renderErrorsAndWarningsColumn = this.renderErrorsAndWarningsColumn.bind(this);
    this.renderActionColumn = this.renderActionColumn.bind(this);
  }

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

  // column resizing event for the table column
  handleColumnResize(newColumnWidth, columnKey) {
    var columnWidths = this.state.columnWidths;
    columnWidths[columnKey] = newColumnWidth;

    this.setState({
      columnWidths
    });
  }

  // render a cell within a column with the data
  renderCell({rowIndex, columnKey}) {
    const path = this.props.headers[columnKey].path;
    const item = this.props.data[rowIndex];
    const data = jsonpath.query(item, path);

    // return the cell
    return (
      <Cell>{data}</Cell>
    );
  }

  // render a column based on a header and index
  renderColumn(header, i) {
    if (!header.visible) return; // exit if it is invisible
    const width = this.state.columnWidths[i] || defaultMmts.width;
    const iconStyle = {
      color: `#${header.iconColor}`,
    };
    const icon = (
      <FontAwesomeIcon icon={header.icon} style={iconStyle} />
    );
    const headerCell = (
      <Cell className="header-cell">
        {icon}
        <span>{header.label}</span>
      </Cell>
    );

    // return the column
    return (
      <Column
        key={i}
        columnKey={i}
        header={headerCell}
        cell={this.renderCell}
        isResizable={true}
        width={width}
        minWidth={defaultMmts.minWidth}
        maxWidth={defaultMmts.maxWidth}
      />
    );
  }

  // render a special table column for the errors and warnings
  renderErrorsAndWarningsColumn() {
    if (!this.props.showErrorsAndWarnings) return;
    const width = 50;

    // render the cell
    const renderCell = ({rowIndex, columnKey}) => {
      const item = this.props.data[rowIndex];
      const analysis = dig(item, '_source', 'analysis');

      return (
        <Cell className="cell-errors-warnings">
          <OptionErrorsWarnings
            onDetail={this.handleDetail.bind(null, item)}
            updateErrorsAndWarnings={this.props.updateErrorsAndWarnings}
            analysis={analysis}
          />
        </Cell>
      );
    }

    // return the column
    return (
      <Column
        key="errors"
        columnKey="errors"
        header={<Cell></Cell>}
        cell={renderCell}
        isResizable={false}
        width={width}
        minWidth={width}
        maxWidth={width}
      />
    );
  }

  // render a special table column for the action
  renderActionColumn() {
    if (!this.props.showActions) return;

    // standard with and header
    const width = 70;
    const header = (
      <Cell>Actions</Cell>
    );

    // return with a custom action column
    if (this.props.actionsColumn) {
      // render the custom cell
      const renderCustomCell = ({rowIndex, columnKey}) => {
        const item = this.props.data[rowIndex];
        return (
          <Cell className="cell-action">
            {this.props.actionsColumn(rowIndex, columnKey)}
          </Cell>
        );
      }

      return (
        <Column
          key="actions"
          columnKey="actions"
          header={header}
          cell={renderCustomCell}
          isResizable={false}
          width={width}
          minWidth={width}
          maxWidth={width}
        />
      );
    }

    // render the cell
    const renderCell = ({rowIndex, columnKey}) => {
      const item = this.props.data[rowIndex];
      return (
        <Cell className="cell-action">
          <OptionAction
            onDetail={this.handleDetail.bind(null, item)}
          />
        </Cell>
      );
    }

    // return the column
    return (
      <Column
        key="actions"
        columnKey="actions"
        header={header}
        cell={renderCell}
        isResizable={false}
        width={width}
        minWidth={width}
        maxWidth={width}
      />
    );
  }

  // main render method
  render() {
    const actionColumn = this.renderActionColumn();
    const errorsAndWarningsColumn = this.renderErrorsAndWarningsColumn();
    return (
      <div className="super-table">
        <Table
          rowHeight={defaultMmts.rowHeight}
          headerHeight={defaultMmts.rowHeight}
          rowsCount={this.props.data.length}
          width={this.state.width}
          height={this.state.height}
          isColumnResizing={false}
          onColumnResizeEndCallback={this.handleColumnResize}>
          {errorsAndWarningsColumn}
          {actionColumn}
          {this.props.headers.map(this.renderColumn)}
        </Table>
      </div>
    )
  }
}

// set the props, defaults and export
SuperTable.propTypes = propTypes;
SuperTable.defaultProps = defaultProps;

export default SuperTable;