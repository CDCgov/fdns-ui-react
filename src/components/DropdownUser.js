import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ClickAwayListener, Divider, Grid, MenuList, Paper, Popper, Typography } from '@material-ui/core';

import { _user } from '../fixtures/shapes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// set the prop types from predefined shapes or standard types
const propTypes = {
  user: _user,
  onSignOut: PropTypes.func,
  placement: PropTypes.string,
};

// set the defaults
const defaultProps = {
  user: {
    firstName: 'First',
    lastName: 'Last',
    email: 'abc1@my.org',
    avatar: 'http://placehold.it/80x80.png',
    org: 'ABC/DEF/XYZ',
  },
  onSignOut() {},
  placement: 'bottom-start',
};

// define the class
class DropdownUser extends Component {
  handleSignOut = (e) => {
    this.props.onSignOut();
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
    const { firstName, lastName, org, avatar, email } = this.props.user;
    const { placement } = this.props;
    const { open } = this.state;

    return (
      <div className="dropdown-user">
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
          disableRipple={true}
        >
          <figure className="avatar">
            <img alt="avatar icon" className="avatar img-circle" src={avatar} />
          </figure>
          <span className="user-name">{lastName}, {firstName}</span>
          <span className="caret"></span>
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} transition placement={placement} disablePortal>
          {({ placement }) => (
            <ClickAwayListener onClickAway={this.handleClose}>
              <MenuList className="user-dropdown-menu">
                <div className={`source-arrow-shadow ${placement}`}></div>
                <div className={`source-arrow ${placement}`}></div>
                <Grid container direction={'column'}>
                  <Grid item className="grid-item">
                    <img alt="avatar icon" className="lg-avatar avatar img-circle" src={avatar} />
                    <div className="user-info">
                      <Typography gutterBottom className="user-name">{lastName}, {firstName}</Typography>
                      <Typography gutterBottom className="user-email"><a href={`mailto:${email}`}>{email}</a></Typography>
                      <Typography gutterBottom className="user-organization">{org}</Typography>
                    </div>
                  </Grid>
                  <Divider />
                  <Grid item className="grid-item" >
                    <Button variant="contained" color="secondary" onClick={this.handleSignOut} fullWidth={true}>
                      Log Off
                      <FontAwesomeIcon icon="sign-out-alt" />
                    </Button>
                  </Grid>
                </Grid>
              </MenuList>
            </ClickAwayListener>
          )}
        </Popper>

      </div>
    );
  }
}

// set the props, defaults and export
DropdownUser.propTypes = propTypes;
DropdownUser.defaultProps = defaultProps;

export default DropdownUser;
