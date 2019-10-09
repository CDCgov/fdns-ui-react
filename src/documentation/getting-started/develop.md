Develop stuff with FDNS UI react component library. 

[![Build Status](https://travis-ci.org/CDCgov/fdns-ui-react.svg?branch=master)](https://travis-ci.org/CDCgov/fdns-ui-react)

### Running locally
Carefully read the following instructions on how to run and test this library in your local environment.

### Dependencies 
You will need to have the following software installed to run this library locally:

- [Node.js](https://nodejs.org/en/)
- **Windows Users**: Please use [Cygwin](https://www.cygwin.com/) or the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) for running the commands in this README

### Basic Usage
Create your project with [create-react-app](https://github.com/facebookincubator/create-react-app).

```sh
create-react-app my-app
cd my-app
npm install --save fdns-ui-react
```

Open up `src/App.js` in your text editor of choice and include the React components:

Start your project:

```sh
npm start
```

Open [http://localhost:3000/](http://localhost:3000/) in a web browser and view your Grid. You can now add any components in the library into your application.

### StyleGuidist
This library currently uses [react-styleguidist](https://github.com/styleguidist/react-styleguidist) to document and view examples of the various components.

To view the StyleGuide, after running `npm i`, use the command:

```sh
npm start
```

or `npx styleguidist server`. This will run the styleguide on `http://localhost:6060/`.
_________________
