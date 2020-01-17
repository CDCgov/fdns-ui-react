import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DropdownUser from '../options/DropdownUser';

// set the prop types from predefined shapes or standard types
const propTypes = {
  /** Background color of the bar */
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
  ]),
  /** onSearch event */
  onSearch: PropTypes.func,
  /** Whether or not to show the search function */
  showSearch: PropTypes.bool,
  /** Title of App or NavBar */
  title: PropTypes.string,
};

// set the defaults
const defaultProps = {
  color: 'default',
  onSearch() {},
  showSearch: true,
  title: 'My App',
};

// define the class
class NavBar extends Component {


  render() {
    // TODO: Properly set up onSearch event
    const { color, showSearch, onSearch, title } = this.props;
    return (
      <AppBar position="static" color={color} className="navbar">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
          {
            showSearch ? (
              <div className="nav-search-bar">
                <SearchIcon className="search-icon" />
                <InputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            ) : (
              null
            )
          }
          <DropdownUser className="dropdown-user" onSignOut={()=>{}} placement={'bottom-end'} />
        </Toolbar>
      </AppBar>
    );
  }
}

// set the props, defaults and export
NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;
