import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, MenuItem } from 'react-bootstrap';
import { _user } from '../fixtures/shapes';

// set the prop types from predefined shapes or standard types
const propTypes = {
  user: _user,
  onSignOut: PropTypes.func,
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
};

// define the class
class DropdownUser extends Component {
  handleSignOut = (e) => {
    this.props.onSignOut();
  }

  // main render method
  render() {
    const { firstName, lastName, org, avatar, email } = this.props.user;

    return (
      <div className="dropdown-user">
        <Dropdown pullRight id="dropdown-user">
          <Dropdown.Toggle>
            <figure className="avatar">
              <img alt="avatar icon" className="avatar img-circle" src={avatar} />
            </figure>
            <span className="user-name">{lastName}, {firstName}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="row">
              <div className="col-sm-12">
                <figure className="lg-avatar">
                  <img alt="avatar icon" className="avatar img-circle" src={avatar} />
                </figure>
                <p className="user-name">{lastName}, {firstName}</p>
                <p className="user-email"><a href={`mailto:${email}`}>{email}</a></p>
                <p className="user-organization">{org}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <hr/>
                <MenuItem eventKey="1">
                  <button className="btn btn-danger btn-block" onClick={this.handleSignOut}>
                    <i className="fa fa-sign-out"></i>
                    <span>Log Off</span>
                  </button>
                </MenuItem>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

// set the props, defaults and export
DropdownUser.propTypes = propTypes;
DropdownUser.defaultProps = defaultProps;

export default DropdownUser;
