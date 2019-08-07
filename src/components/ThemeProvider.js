import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const palette = {
  primary: {
    light: '#116cb8',
    main: '#075290',
    dark: '#01447b',
    contrastText: '#fff',
  },
  secondary: {
    light: '#54b8b2',
    main: '#20958e',
    dark: '#006a63',
    contrastText: '#fff',
  },
};

const typography = {};

const lightTheme = createMuiTheme({
  palette: Object.assign(palette, {
    type: 'light',
  }),
  typography,
});

const darkTheme = createMuiTheme({
  palette: Object.assign(palette, {
    type: 'dark',
  }),
  typography,
});

const themeMap = {
  light: lightTheme,
  dark: darkTheme,
}

const propTypes = {
  theme: PropTypes.string,
};

// set the defaults
const defaultProps = {
  theme: 'light',
};

// define the class
class ThemeProvider extends Component {
  render() {
    const { theme } = this.props;

    return (
      <MuiThemeProvider theme={themeMap[theme]}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

// set the props, defaults and export
ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;