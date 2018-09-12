import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Dropdown, MenuItem, Tooltip, OverlayTrigger, ProgressBar, Button } from 'react-bootstrap';
import { _downloads } from '../fixtures/shapes';

// icon downloads
const icoDownloads = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMjEgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aWNvLWRvd25sb2FkPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImFwcC1kZXNrdG9wLWxpc3QtbmV3LTItY29sbGFwc2VkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY0NS4wMDAwMDAsIC0yMS4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiMzNzgwQjQiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTY2MC44MjUxNCwzMS4yMDE3NzU5IEwxNjYwLjgyNTE0LDMyLjk2NzgwNDEgTDE2NjQuMjM4NzUsMzIuOTY3ODA0MSBMMTY2NC4yMzg3NSwzOC4yMzU4NjM4IEwxNjQ2Ljc1OTQ5LDM4LjIzNTg2MzggTDE2NDYuNzU5NDksMzIuOTY3NzYzIEwxNjUwLjE3NDk4LDMyLjk2Nzc2MyBMMTY1MC4xNzQ5OCwzMS4yMDE3MzQ4IEwxNjQ1LDMxLjIwMTczNDggTDE2NDUsNDAgTDE2NjYsNDAgTDE2NjYsMzEuMjAxNzc1OSBMMTY2MC44MjUxNCwzMS4yMDE3NzU5IFogTTE2NjIuMjgwMjUsMjYuNjYwMDI2IEwxNjU3LjgyMDc5LDI2LjY2MDAyNiBMMTY1Ny44MjA3OSwyMSBMMTY1My4wNjg0MywyMSBMMTY1My4wNjg0MywyNi42NjAwMjYgTDE2NDguNjExMDYsMjYuNjYwMDI2IEwxNjU1LjQ0NTY1LDM0Ljk2NTMxMDMgTDE2NjIuMjgwMjUsMjYuNjYwMDI2IFoiIGlkPSJpY28tZG93bmxvYWQiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';

// set the prop types from predefined shapes or standard types
const propTypes = {
  downloads: _downloads,
  onClear: PropTypes.func,
  renderURL: PropTypes.func,
};

// set the defaults
const defaultProps = {
  downloads: [],
  onClear() {},
};

// define the class
class DropdownDownloads extends Component {

  // handle clear event
  handleClear = (e) => {
    this.props.onClear();
  }

  // render the row
  renderRow = (download, index) => {
    const { query, format, status, progress, file } = download;
    const now = Math.round(progress * 100);
    const active = (status === 'RUNNING');

    let tooltipText = `Query: "${query}"`;
    if (tooltipText === 'Query: ""') tooltipText = 'Query: "All Results"';

    let description = (
      <div className="fx-grd">
        <div className="col col-7 col-file-name">
          File Type: {format}
        </div>
      </div>
    );

    let progressBar = (
      <ProgressBar active={active} now={now} />
    );

    // tooltip with the query
    const tooltip = (
      <Tooltip id={`download-tooltip-${index}`}>
        {tooltipText}
      </Tooltip>
    );

    // if the download is finished
    if (status === 'COMPLETED') {
      const modified = moment(file.modified);

      // set url
      let url = '';
      if (this.props.renderURL) url = this.props.renderURL(file);

      description = (
        <div className="fx-grd">
          <div className="col col-4 col-file-date">
            Completed {modified.format('MM/DD/YYYY h:mm A')}
          </div>
          <div className="col col-3 col-file-download">
            <a href={url}>Download</a>
          </div>
        </div>
      );

    // if the download errored
    } else if (status === 'ERROR') {
      description = (
        <div className="fx-grd">
          <div className="col col-4 col-file-date">
            Error
          </div>
        </div>
      );

      progressBar = (
        <ProgressBar active={active} now={now} bsStyle="danger" />
      );
    }

    return (
      <div key={index} className="download-row">
        <OverlayTrigger placement="right" overlay={tooltip}>
          <div>
            {progressBar}
            {description}
          </div>
        </OverlayTrigger>
      </div>
      
    );
  }

  // render the rows
  renderRows = () => {
    if (this.props.downloads.length > 0) return this.props.downloads.map(this.renderRow);

    return (
      <div className="empty">{'You do not have any downloads'}</div>
    )
  }

  // render the reset button
  renderReset = () => {
    if (this.props.downloads.length > 0) {
      return (
        <div className="reset-downloads">
          <Button onClick={this.handleClear}>Clear</Button>
        </div>
      );
    }
  }

  // main render method
  render() {
    return (
      <div className="dropdown-downloads">
        <Dropdown pullRight id="dropdown-downloads">
          <Dropdown.Toggle>
            <img src={icoDownloads} alt="Downloads Icon" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <h3>Download Queue</h3>
            {this.renderRows()}
            {this.renderReset()}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

// set the props, defaults and export
DropdownDownloads.propTypes = propTypes;
DropdownDownloads.defaultProps = defaultProps;

export default DropdownDownloads;
