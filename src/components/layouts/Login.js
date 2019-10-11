import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SuperButton from '../buttons/SuperButton';
import SuperInput from '../inputs/SuperInput';
import { Typography } from '@material-ui/core';

const icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjdweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMjcgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5QSVYtY2hpcDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTYuNTIzNDM3NSUiIHkxPSIyLjM0NTA1MjA4JSIgeDI9Ijg4Ljk2NzAxMzklIiB5Mj0iOTcuNjI1JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZGRkZGIiBzdG9wLW9wYWNpdHk9IjAuMTIiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTIiIHg9IjAiIHk9IjAuODA1NTU1NTU2IiB3aWR0aD0iMjUuMjEyMTIxMiIgaGVpZ2h0PSIyOC4wMDc3MjYzIiByeD0iMi42MTI3MzYiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJGRE5TLWxvZ2luLW9wZW5lciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU2MS4wMDAwMDAsIC02MzYuMDAwMDAwKSI+CiAgICAgICAgPGcgaWQ9IndoaXRlLXBhbmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNzAuMDAwMDAwLCAyNjIuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJQSVYtY2hpcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjA1LjI1MTA4MCwgMzg4LjcyNDY3Mykgcm90YXRlKC0xLjAwMDAwMCkgdHJhbnNsYXRlKC0yMDUuMjUxMDgwLCAtMzg4LjcyNDY3MykgdHJhbnNsYXRlKDE5Mi4yNTEwODAsIDM3NC4yMjQ2NzMpIj4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJSZWN0YW5nbGUtOSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGRDM1MyIgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPSIjRTRCOTNDIiBzdHJva2Utd2lkdGg9IjAuNjQ4IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjAwOTU3MDMsMjguMjYyMjU3NCBMMTQuOTM2MzM0LDI4LjUyNTMzMDQgTDE0LjkzNjMzNCwxOS41MTE5MzAzIEwxMC4wMDk1NzAzLDE5LjUxMTkzMDMgTDEwLjAwOTU3MDMsMjguMjYyMjU3NCBaIiBpZD0iUmVjdGFuZ2xlLTEyIiBzdHJva2U9IiNFNEI5M0MiIHN0cm9rZS13aWR0aD0iMC45Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjAyNjExMjcsMS4yMDQ4MTUgTDEwLjAyNjExMjcsMTAuMDM2NDgwNyBMMTQuNzI1MTMwMiwxMC4wMzY0ODA3IEwxNC43MjUxMzAyLDEuMjA0ODE1IEwxMC4wMjYxMTI3LDEuMjA0ODE1IFoiIGlkPSJSZWN0YW5nbGUtMTIiIHN0cm9rZT0iI0U0QjkzQyIgc3Ryb2tlLXdpZHRoPSIwLjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjM3NTYyMSwgNS42MjA2NDgpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTEyLjM3NTYyMSwgLTUuNjIwNjQ4KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlBhdGgtMiIgc3Ryb2tlPSIjRTRCOTNDIiBwb2ludHM9IjUuMjI5MTgwNyAwLjk5MjI3MzczMSAzLjU0ODM3MjYyIDE0LjkwMjc3NzggNS4yMjkxODA3IDI4LjgxMzI4MTgiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJQYXRoLTIiIHN0cm9rZT0iI0U0QjkzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMzgzNjE0LCAxNC45MDI3NzgpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTIxLjM4MzYxNCwgLTE0LjkwMjc3OCkgIiBwb2ludHM9IjIyLjIyNDAxOCAwLjk5MjI3MzczMSAyMC41NDMyMDk5IDE0LjkwMjc3NzggMjIuMjI0MDE4IDI4LjgxMzI4MTgiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuMzE1MjIyNSwxOS40MDI2ODU4IEwwLjA3MzA5NDIyMzUsMTkuNDAyNjg1OCIgaWQ9IlBhdGgtMyIgc3Ryb2tlPSIjRTRCOTNDIiBzdHJva2Utd2lkdGg9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTI1LjI1Nzk5NzUsMTAuMDc3NDA5NSBMMC4wNTQzMzk3ODQ2LDEwLjA3NzQwOTUiIGlkPSJQYXRoLTMiIHN0cm9rZT0iI0U0QjkzQyIgc3Ryb2tlLXdpZHRoPSIwLjkiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';

// set the prop types from predefined shapes or standard types
const propTypes = {
  title: PropTypes.string,
  resetURL: PropTypes.string,
  onSmartCard: PropTypes.func,
  smartCardURL: PropTypes.string,
  onLogin: PropTypes.func,
  loginURL: PropTypes.string,
};

// set the defaults
const defaultProps = {
  title: 'FDNS Login',
  resetURL: 'https://localhost:8443/reset-password/',
  smartCardURL: '/piv',
  loginURL: '/login',
};

// define the class
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  // handle username and password change
  handleUsernameChange = (e) => this.setState({ username: e.target.value });
  handlePasswordChange = (e) => this.setState({ password: e.target.value });

  // handle smart card click
  handleSmartCardClick = (e) => {
    const { smartCardURL } = this.props;

    if (this.props.onSmartCard) {
      this.props.onSmartCard(smartCardURL);
      return;
    }

    window.location.href = smartCardURL;
  }

  // handle login click
  handleLoginClick = (e) => {
    const { loginURL } = this.props;
    const { username, password } = this.state;

    const params = {
      username,
      password,
    };

    if (this.props.onLogin) {
      this.props.onLogin(loginURL, params);
      return;
    }

    // check we have both values
    if ((username.length > 0) && (password.length > 0)) {
      this.postToURL(loginURL, params);
    }
  }

  // post to URL
  postToURL = (actionURL, params, method) => {
    method = method || 'post';

    const form = document.createElement('form');
    form.setAttribute('method', method);
    form.setAttribute('action', actionURL);

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const hiddenField = document.createElement('input');
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute('name', key);
        hiddenField.setAttribute('value', params[key]);

        form.appendChild(hiddenField);
      }
    }

    document.body.appendChild(form);
    form.submit();
  }

  // main render method
  render() {
    const { title, resetURL } = this.props;
    const { username, password } = this.state;

    return (
      <div className="login">
        <Typography variant="h5">{title}</Typography>
        <SuperInput label="Username" type="text" placeholder="Enter your username" value={username} onChange={this.handleUsernameChange} />
        <SuperInput label="Password" type="password" placeholder="Enter your password" value={password} onChange={this.handlePasswordChange} />
        <Typography className="forgot-password"><a href={resetURL}>{'Forgot Password'}</a></Typography>
        <SuperButton
          className="btn-login"
          label="Sign In"
          btnStyle="primary"
          onClick={this.handleLoginClick}
        />
        <div className="hr">
          <h4>or</h4>
        </div>
        <SuperButton
          className="btn-piv"
          label="Access Smart PIV Card"
          btnStyle="default"
          icon={icon}
          iconAlt="Smart PIV Card Icon"
          onClick={this.handleSmartCardClick}
        />
      </div>
    );
  }
}

// set the props, defaults and export
Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
