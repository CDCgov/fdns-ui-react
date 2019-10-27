<style>
.badges a {
  display: inline-block;
}
</style>

Develop stuff with FDNS UI react component library. 

<div class="badges">
[![Build Status](https://travis-ci.org/CDCgov/fdns-ui-react.svg?branch=master)](https://travis-ci.org/CDCgov/fdns-ui-react)
[![Known Vulnerabilities](https://snyk.io/test/github/{username}/{repo}/badge.svg)](https://snyk.io/test/github/{username}/{repo})
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

</div>

### Running locally
Carefully read the following instructions on how to run and test this library in your local environment.

### Dependencies 
You will need to have the following software installed to run this library locally:

- [Node.js](https://nodejs.org/en/)
- **Windows Users**: Please use [Cygwin](https://www.cygwin.com/) or the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) for running the commands in this README

**Install dependencies (Windows):**

Simply download the  [Windows Installer](https://nodejs.org/en/#home-downloadhead)  directly from the  [nodejs.org](https://nodejs.org/)  web site.

**Install dependencies (MacOS):**

Simply download the  [macOS Installer](https://nodejs.org/en/#home-downloadhead)  directly from the  [nodejs.org](https://nodejs.org/)  web site.

/If you want to download the package with bash:/

``` zsh
curl “https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE ‘s|.*>node-(.*)\.pkg</a>.*|\1|p’)}.pkg” > “$HOME/Downloads/node-latest.pkg” && sudo installer -store -pkg “$HOME/Downloads/node-latest.pkg” -target “/“
```

### Basic Usage
Create your project with [create-react-app](https://github.com/facebookincubator/create-react-app).

```js static
create-react-app my-app
cd my-app
npm install --save fdns-ui-react
```

Open up `src/App.js` in your text editor of choice and include the React components:

```js static
import React, { Component } from 'react';
import { SuperGrid, fixtures } from 'fdns-ui-react';
import logo from './logo.svg';
import './App.css';

// grab some test fixtures
const { headers, messages } = fixtures;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SuperGrid data={messages} headers={headers} />
      </div>
    );
  }
}

export default App;
```

Start your project:

`npm start`

Open [http://localhost:3000/](http://localhost:3000/) in a web browser and view your Grid. You can now add any components in the library into your application.

### StyleGuidist
This library currently uses [react-styleguidist](https://github.com/styleguidist/react-styleguidist) to document and view examples of the various components.

To view the StyleGuide, after running `npm i`, use the command:

`npm start` or `npx styleguidist server`. This will run the styleguide on `http://localhost:6060/`.

### License

This project is licensed under the terms of the
[Apache License, Version 2.0 | Open Source Initiative](https://opensource.org/licenses/Apache-2.0)
_________________
