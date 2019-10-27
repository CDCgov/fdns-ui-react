### Pre-requisites
- _Node:_ `^11.0.0` or higher.
- _Npm:_ `6.7.0` or higher.

### Getting started
⭐️ Star the project

Clone the project from Github :

```bash
git clone https://github.com/CDCgov/fdns-ui-react.git
cd fdns-ui-react
```

**Install dependencies (Windows):**

Simply download the  [Windows Installer](https://nodejs.org/en/#home-downloadhead)  directly from the  [nodejs.org](https://nodejs.org/)  web site.

**Install dependencies (MacOS):**

Simply download the  [macOS Installer](https://nodejs.org/en/#home-downloadhead)  directly from the  [nodejs.org](https://nodejs.org/)  web site.

/If you want to download the package with bash:/

``` zsh
curl “https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE ‘s|.*>node-(.*)\.pkg</a>.*|\1|p’)}.pkg” > “$HOME/Downloads/node-latest.pkg” && sudo installer -store -pkg “$HOME/Downloads/node-latest.pkg” -target “/“
```

Setup development environment:

```bash
npx styleguidist server
```

### Commit messages
Commit messages should follow the  [commit message convention](https://conventionalcommits.org/)  so, changelogs could be generated automatically by that. Commit messages are validated automatically upon commit. If you aren’t familiar with the commit message convention, you can use yarn commit (or npm run commit) instead of git commit, which provides an interactive CLI for generating proper commit messages.