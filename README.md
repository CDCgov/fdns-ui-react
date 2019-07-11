[![Build Status](https://travis-ci.org/CDCgov/fdns-ui-react.svg?branch=master)](https://travis-ci.org/CDCgov/fdns-ui-react)

# FDNS User Interface Library for React
This repository contains a front-end library built in React. The library is designed to help developers efficiently build user interfaces on top of the Foundation Services. The library is **pre-release software** and being made public to gain feedback from the open source community.

## Running locally
Carefully read the following instructions on how to run and test this library in your local environment.

## Dependencies

### Before you start
You will need to have the following software installed to run this library locally:

- [Node.js](https://nodejs.org/en/)
- **Windows Users**: Please use [Cygwin](https://www.cygwin.com/) or the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) for running the commands in this README

### FontAwesome
Note that this app uses the free version of FontAwesome v5, specifically [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) for most of its icons. Many icons have changed in syntax slightly since v4, so be sure to check against the [new FA icon gallery](https://fontawesome.com/icons).

You can add a new FontAwesomeIcon to your component by first importing the React component:

    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Then you will have available `FontAwesomeIcon` (the icon name is from the base and does not include `fa fa-` like in previous versions of FA):

    <FontAwesomeIcon icon='file-code' />

Both the `fas` (Solid, default) and `far` (Regular) icons have been added to the library. If you need to add a Regular icon (`-o` in v4), you must add in that style such as:

    <FontAwesomeIcon icon={['far' ,'file-code']} />

Reference the docs for further details about what all can be done with this lib.

## Basic Usage
Create your project with [create-react-app](https://github.com/facebookincubator/create-react-app).

```sh
create-react-app my-app
cd my-app
npm install --save fdns-ui-react
```

Open up `src/App.js` in your text editor of choice and include the React components:

```js
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

```sh
npm start
```

Open [http://localhost:3000/](http://localhost:3000/) in a web browser and view your Grid. You can now add any components in the library into your application.

## Development

If you wish to add or test this library, the best way currently is to utilize the [fdns-ui-react-docs](https://github.com/CDCgov/fdns-ui-react-docs) app and run it in dev mode adjacent to this repo before linking it with npm. You can then run this app in dev mode (`npm run dev`) which will run `watch` and update the docs app as you change this library. Make sure to read the instructions in the docs library as well.

If you get a `Multiple copies of React loaded` error (this will often happen when you do a new `npm i` on this library or on the docs app), you will need to run `npm run link` in the docs library again to resolve this issue.

## Public Domain
This repository constitutes a work of the United States Government and is not
subject to domestic copyright protection under 17 USC § 105. This repository is in
the public domain within the United States, and copyright and related rights in
the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
All contributions to this repository will be released under the CC0 dedication. By
submitting a pull request you are agreeing to comply with this waiver of
copyright interest.

## License
The repository utilizes code licensed under the terms of the Apache Software
License and therefore is licensed under ASL v2 or later.

The source code in this repository is free: you can redistribute it and/or modify it under
the terms of the Apache Software License version 2, or (at your option) any
later version.

The source code in this repository is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the Apache Software License for more details.

You should have received a copy of the Apache Software License along with this
program. If not, see https://www.apache.org/licenses/LICENSE-2.0.html.

The source code forked from other open source projects will inherit its license.


## Privacy
This repository contains only non-sensitive, publicly available data and
information. All material and community participation is covered by the
Surveillance Platform [Disclaimer](https://github.com/CDCgov/template/blob/master/DISCLAIMER.md)
and [Code of Conduct](https://github.com/CDCgov/template/blob/master/code-of-conduct.md).
For more information about CDC's privacy policy, please visit [https://www.cdc.gov/privacy.html](https://www.cdc.gov/privacy.html).

## Contributing
Anyone is encouraged to contribute to the repository by [forking](https://help.github.com/articles/fork-a-repo)
and submitting a pull request. (If you are new to GitHub, you might start with a
[basic tutorial](https://help.github.com/articles/set-up-git).) By contributing
to this project, you grant a world-wide, royalty-free, perpetual, irrevocable,
non-exclusive, transferable license to all users under the terms of the
[Apache Software License v2](https://www.apache.org/licenses/LICENSE-2.0.html) or
later.

All comments, messages, pull requests, and other submissions received through
CDC including this GitHub page are subject to the [Presidential Records Act](https://www.archives.gov/about/laws/presidential-records.html)
and may be archived. Learn more at [https://www.cdc.gov/other/privacy.html](https://www.cdc.gov/other/privacy.html).

## Records
This repository is not a source of government records, but is a copy to increase
collaboration and collaborative potential. All government records will be
published through the [CDC web site](https://www.cdc.gov).

## Notices
Please refer to [CDC's Template Repository](https://github.com/CDCgov/template)
for more information about [contributing to this repository](https://github.com/CDCgov/template/blob/master/CONTRIBUTING.md),
[public domain notices and disclaimers](https://github.com/CDCgov/template/blob/master/DISCLAIMER.md),
and [code of conduct](https://github.com/CDCgov/template/blob/master/code-of-conduct.md).
