import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';
import IconButton from '../buttons/IconButton';
import SearchBar from '../search/SearchBar';

// set the prop types from predefined shapes or standard types
const propTypes = {
  errorText: PropTypes.string,
  onOptionsClick: PropTypes.func,
  canSave: PropTypes.bool,
  onSave: PropTypes.func,
  onSearch: PropTypes.func,
  position: PropTypes.string,
  query: PropTypes.string,
  showActions: PropTypes.bool,
  showOptions: PropTypes.bool,
  showSearchBar: PropTypes.bool,
};

// set the defaults
const defaultProps = {
  canSave: true,
  onOptionsClick() {},
  onSave() {},
  onSearch() {},
  position: 'fixed',
  query: '',
  showActions: true,
  showOptions: true,
  showSearchBar: true,
};

// define the class
class ActionBar extends Component {
  handleSearch = () => {
    this.props.onSearch();
  }

  handleViewOptions = () => {
    this.props.onOptionsClick();
  }

  handleSave = () => {
    this.props.onSave();
  }

  render() {
    const { canSave, errorText, query, showActions, showOptions, showSearchBar } = this.props;
    return (
      <AppBar position="static" color="default" className="ActionBar-options">
        <Toolbar>
          {
            showSearchBar ? (
              <SearchBar query={query} onSearch={this.handleSearch} />
            ) : null
          }
          {
            showActions ? (
              <React.Fragment>{this.props.children}</React.Fragment>
            ) : null
          }
          {
            showOptions ? (
              <IconButton icon="cogs" color="secondary" variant="contained" onClick={this.handleViewOptions}>
                Options
              </IconButton>
            ) : null
          }
          {
            (canSave) ? (
              <React.Fragment>
                <IconButton icon="save" color="default" variant="outlined" onClick={this.handleSave}>
                  Save
                </IconButton>
              </React.Fragment>
            ) : null
          }
          {
            errorText ? (
              <Typography variant={'body2'} color={'error'}>{errorText}</Typography>
            ) : null
          }
        </Toolbar>
      </AppBar>
    );
  }
}

// set the props, defaults and export
ActionBar.propTypes = propTypes;
ActionBar.defaultProps = defaultProps;

export default ActionBar;
