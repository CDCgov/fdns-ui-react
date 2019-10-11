import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dig from 'object-dig';
import OptionAction from '../options/OptionAction';
import OptionErrorsWarnings from '../options/OptionErrorsWarnings';
import { _headers } from '../../fixtures/shapes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DragHandleIcon from '@material-ui/icons/DragHandle';

import { Paper, IconButton, TableCell, TableHead, TableRow, TableSortLabel, Tooltip } from '@material-ui/core';

import { AutoSizer, Column, SortDirection, Table } from 'react-virtualized';
import Draggable from 'react-draggable';

// set the prop types from predefined shapes or standard types
const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  headers: _headers,
  showErrorsAndWarnings: PropTypes.bool,
  showActions: PropTypes.bool,
  onDetail: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
};

// set the defaults
const defaultProps = {
  data: [],
  headers: [],
  showErrorsAndWarnings: true,
  showActions: true,
  onDetail() {},
  width: 800,
  height: 300,
};

function dynamicSort(property, order) {
  let sortOrder = (order === 'ASC') ? 1 : -1;
  return function (a,b) {
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}

function stableSort(array, order, orderBy) {
  const reducedOrderBy = orderBy.replace(/\$./i, ''); // remove the $. from the path string if it exists
  const newArray = array.sort(dynamicSort(reducedOrderBy, order));
  return newArray;
}

// define the class
class SuperTable extends Component {

  // init
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      widths: {
        warnings: 0.10,
        actions: 0.10,
      },
      totalWidth: this.props.totalWidth || 1096,
      sortBy: 'index',
      sortDirection: SortDirection.ASC,
      sortedList: this.props.data,
    };

    this.initialTotalWidth = 1;
    if (this.props.showErrorsAndWarnings) {
      this.initialTotalWidth -= this.state.widths.warnings;
    }
    if (this.props.showActions) {
      this.initialTotalWidth -= this.state.widths.actions;
    }

    this.handleDetail = this.handleDetail.bind(this);
  }

  // called when an OptionAction is fired
  handleDetail(item) {
    if (this.props.onDetail) this.props.onDetail(item);
  }

  // Errors/Warnings and Options Column Handlers
  renderErrorsAndWarnings = ({ rowIndex = null }) => {
    if (!this.props.showErrorsAndWarnings) return;
    const { data } = this.state;
    const cellData = data[rowIndex];
    const analysis = dig(cellData, '_source', 'analysis');

    return (
      <TableCell
        key={`warning-${cellData.id}`}
        className="warning-cell super-table-cell"
        component="div"
        variant="body"
      >
        <OptionErrorsWarnings
          onDetail={this.handleDetail.bind(null, cellData)}
          updateErrorsAndWarnings={this.props.updateErrorsAndWarnings}
          analysis={analysis}
        />
      </TableCell>
    )
  }

  renderErrorsAndWarningHeader = () => {
    return (
      <TableCell
        key={'warning'}
        component="div"
        variant="head"
        className="super-table-header warning-cell"
      >
      </TableCell>
    )
  }

  renderErrorsAndWarningsColumn = () => {
    if (!this.props.showErrorsAndWarnings) return;

    const { totalWidth, widths } = this.state;
    return (
      <Column
        headerRenderer={this.renderErrorsAndWarningHeader}
        cellRenderer={this.renderErrorsAndWarnings}
        key={'warning-column'}
        dataKey="warnings"
        width={widths.warnings * totalWidth}
        disableSort
      />
    )
  }

  renderActionHeader = () => {
    return (
      <TableCell
        key={'action'}
        component="div"
        variant="head"
        className="super-table-header"
      >
        Actions
      </TableCell>
    )
  }

  renderAction = ({ rowIndex = null }) => {
    if (!this.props.showActions) return;
    const { data } = this.state;
    const cellData = data[rowIndex];
    return (
      <TableCell
        key={`action-${cellData.id}`}
        component="div"
        className="super-table-cell"
        variant="body"
      >
        <OptionAction
          onDetail={this.handleDetail.bind(null, cellData)}
        />
      </TableCell>
    )
  }

  renderActionColumn = () => {
    if (!this.props.showActions) return;

    const { totalWidth, widths } = this.state;
    return (
      <Column
        headerRenderer={this.renderActionHeader}
        cellRenderer={this.renderAction}
        key={'action-column'}
        dataKey="actions"
        width={widths.actions * totalWidth}
        disableSort
      />
    )
  }

  // End Errors/Warnings and Options Column Handlers

  // standard cell renderer
  cellRenderer = ({ cellData, columnIndex = null }) => {
    const { columns, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className="super-table-cell"
        variant="body"
      >
        {cellData}
      </TableCell>
    );
  };

  // Sorting
  _sort = ({sortBy, sortDirection}) => {
    let sortOrder = (sortDirection === 'ASC') ? 1 : -1;
    const sortedList = stableSort(this.state.sortedList, sortDirection, sortBy);
    this.setState({sortBy, sortDirection, sortedList});
  }

  headerRenderer = ({
    columnData,
    dataKey,
    label,
    sortBy,
    sortDirection
  }) => {
    const { icon:iconName, iconColor } = columnData;
    const iconStyle = {
      color: `#${iconColor}`,
    };

    const direction = {
      [SortDirection.ASC]: 'asc',
      [SortDirection.DESC]: 'desc',
    };

    return (
      <React.Fragment key={dataKey}>
        <TableCell
          component="div"
          variant="head"
          className="super-table-header ReactVirtualized__Table__headerTruncatedText"
        >
          <TableSortLabel active={dataKey === sortBy} direction={direction[sortDirection]}>
            <FontAwesomeIcon className="header-icon" icon={iconName} style={iconStyle} />
            {label}
          </TableSortLabel>
        </TableCell>
        <Draggable
          axis="x"
          defaultClassName="DragHandle"
          defaultClassNameDragging="DragHandleActive"
          onDrag={(event, { deltaX }) =>
            this.resizeRow({
              dataKey,
              deltaX
            })
          }
          position={{ x: 0 }}
          zIndex={999}
        >
          <span className="DragHandleIcon">
            <DragHandleIcon fontSize="small" />
          </span>
        </Draggable>
      </React.Fragment>
    );
  };

  resizeRow = ({ dataKey, deltaX }) => {
    this.setState(prevState => {
      const prevWidths = prevState.widths;
      const percentDelta = deltaX / prevState.totalWidth;

      // the keys used here don't matter at the moment
      const nextDataKey = dataKey === 'name' ? 'title' : 'description';

      return {
        widths: {
          ...prevWidths,
          [dataKey]: prevWidths[dataKey] + percentDelta,
          [nextDataKey]: prevWidths[nextDataKey] - percentDelta
        }
      };
    });
  }

  // main render method
  render() {
    const { data, sortBy, sortDirection, sortedList, totalWidth } = this.state;
    const { headers, height } = this.props;

    const list = sortedList;
    const { widths } = this.state;

    return (
      <Paper
        className="super-table-paper"
        style={
          { 'height': height }
        }
      >
        <AutoSizer>
          {({ height, width }) => (
            <Table
              width={width}
              height={height}
              headerHeight={56}
              rowHeight={40}
              rowCount={list.length}
              rowGetter={({ index }) => list[index]}
              className="super-table"
              sort={this._sort}
              sortBy={sortBy}
              sortDirection={sortDirection}
            >
              {this.renderErrorsAndWarningsColumn()}
              {this.renderActionColumn()}
              {headers.map((header, index) => {
                const dataKey = header.path.replace(/\$./i, '');
                if (!widths[dataKey]) {
                  const initialWidth = this.initialTotalWidth / headers.length;
                  widths[dataKey] = initialWidth;
                }
                return (
                  <Column
                    headerRenderer={this.headerRenderer}
                    cellRenderer={this.cellRenderer}
                    key={`header-${index}`}
                    dataKey={dataKey}
                    label={header.label}
                    width={widths[dataKey] * totalWidth}
                    columnData={header}
                  />
                )
              })
              }
            </Table>
          )}
        </AutoSizer>
      </Paper>
    );
  }
}

// set the props, defaults and export
SuperTable.propTypes = propTypes;
SuperTable.defaultProps = defaultProps;

export default SuperTable;