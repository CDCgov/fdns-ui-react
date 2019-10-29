import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { _downloads } from '../../fixtures/shapes';
import { Button, ClickAwayListener, Grid, Grow, IconButton, LinearProgress, MenuList, Paper, Popper, Tooltip, Typography } from '@material-ui/core';

// icons
import ClearIcon from '@material-ui/icons/Clear';
import GetAppIcon from '@material-ui/icons/GetApp';

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
    const value = Math.round(progress * 100);
    // TODO: Not in use...
    const active = (status === 'RUNNING');

    let tooltipText = `Query: "${query}"`;
    if (tooltipText === 'Query: ""') tooltipText = 'Query: "All Results"';

    let description = (
      <Grid container alignContent={'space-between'}>
        <Grid item>
          <Typography gutterBottom>File Type: {format}</Typography>
        </Grid>
      </Grid>
    );

    let progressBar = (
      <LinearProgress className="download-progress" value={value} color="primary" variant="determinate" />
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
        <Grid container className="dropdown-downloads-description">
          <Grid item>
            <Typography gutterBottom>Completed {modified.format('MM/DD/YYYY h:mm A')}</Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom><a href={url}>Download</a></Typography>
          </Grid>
        </Grid>
      );

    // if the download errored
    } else if (status === 'ERROR') {
      description = (
        <Grid container alignContent={'space-between'}>
          <Grid item>
            <Typography gutterBottom>Error</Typography>
          </Grid>
        </Grid>
      );

      progressBar = (
        <LinearProgress className="download-progress" value={value} color="secondary" variant="determinate" />
      );
    }

    return (
      <div key={index} className="download-row">
        <Tooltip id={`download-tooltip-${index}`} title={tooltipText} placement="right">
          <div>
            {progressBar}
            {description}
          </div>
        </Tooltip>
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
          <Button
            aria-label="Clear"
            alt="Clear"
            onClick={this.handleClear}
            startIcon={<ClearIcon />}
          >
            Clear
          </Button>
        </div>
      );
    }
  }

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  // main render method
  render() {

    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className="dropdown-downloads" aria-label="download">
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          aria-label="Show Downloads"
          alt="Show Downloads"
          onClick={this.handleToggle}
        >
          <GetAppIcon fontSize="small" />
        </IconButton>

        <Popper open={open} anchorEl={this.anchorEl} transition placement={'bottom-end'} disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className="dropdown-downloads-menu" elevation={6}>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <div className="header">
                      <Typography gutterBottom variant="h5">Download Queue</Typography>
                      <IconButton
                        className="close-button"
                        aria-label="Close"
                        alt="Close"
                        onClick={this.handleClose}
                      >
                        <ClearIcon />
                      </IconButton>
                    </div>
                    {this.renderRows()}
                    {this.renderReset()}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

// set the props, defaults and export
DropdownDownloads.propTypes = propTypes;
DropdownDownloads.defaultProps = defaultProps;

export default DropdownDownloads;
