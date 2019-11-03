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
  /** Custom error text that can be displayed on error. */
  errorText: PropTypes.string,
  /** onOptionsClick event */
  onOptionsClick: PropTypes.func,
  /** If the user canSave. This disables the save button if false. */
  canSave: PropTypes.bool,
  /** onSave event */
  onSave: PropTypes.func,
  /** onSearch event */
  onSearch: PropTypes.func,
  /** The CSS position of the ActionBar. It is not recommended that you override this, but it is provided for rare use cases. */
  position: PropTypes.string,
  /** The search query for the SearchBar*/
  query: PropTypes.string,
  /** If the Actions should be shown (e.g. you might set this based on the user's permissions) */
  showActions: PropTypes.bool,
  /** Whether or not to show the Options action */
  showOptions: PropTypes.bool,
  /** Whether or not to show the SearchBar */
  showSearchBar: PropTypes.bool,
};

// set the defaults
const defaultProps = {
  canSave: true,
  onOptionsClick() {},
  onSave() {},
  onSearch() {},
  position: 'static',
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
    const { canSave, errorText, position, query, showActions, showOptions, showSearchBar } = this.props;
    return (
      <AppBar position={position} color="default" className="ActionBar-options">
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
