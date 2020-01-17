Anyone is encouraged to contribute to the repository by [forking](https://help.github.com/articles/fork-a-repo) and submitting a pull request. (If you are new to GitHub, you might start with a [basic tutorial](https://help.github.com/articles/set-up-git).) By contributing to this project, you grant a world-wide, royalty-free, perpetual, irrevocable, non-exclusive, transferable license to all users under the terms of the [Apache Software License v2](https://www.apache.org/licenses/LICENSE-2.0.html) or later.

You might also want to check out this guide on [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

### Open Development
All work happens directly happens on GitHub. Both core team members and external contributors should follow these guidelines and go through the same review process.

### Semantic Versioning
`fdns-ui-react` follows [semantic versioning](https://semver.org/). We release patch versions for critical bugfixes, minor versions for new features or non-essential changes, and major versions for any breaking changes.

### Getting Started
⭐️ Please Star the project! It helps bring attention to the library which will lead to more contributors.

Fork the project from the [fdns-ui-react GitHub repository](https://github.com/cdcgov/fdns-ui-react/).

See our [Getting Started section](/#section-getting-started) for details on how to set up your local development environment.

### Branch Organization
Submit all minor changes directly to the `master` branch. Code that is accepted into `master` must be compatible with the latest stable release. If your code introduces breaking changes, it should be in a separate branch using a `feature/` branch name, e.g. `git checkout -b feature/myNewFeature`. This code will be reviewed and added into a new major release version branch.

### Issues
Please see our [Issues](https://github.com/cdcgov/fdns-ui-react/issues) section for suggestions of how you might contribute. If there is something you wish to work on that does not exist as an Issue, please create one. This allows us to reach agreement on possible solutions before you put in significant effort.

It is not required that an Issue exist for a minor fix for a Pull Request to be accepted, but this will help ensure that you are not working on something that has already been resolved or closed. It is also helpful in case we do not accept your specific fix but want to track the issue moving forward.

If you decide to work on an issue, please leave a comment in the issue thread that you are working on it to avoid duplicating work. If someone commented that they are working on something and did not follow up after two weeks, it is fine to take over the issue, but please leave a comment stating that you are doing so.

### Commit messages
Commit messages should follow the  [commit message convention](https://conventionalcommits.org/)  so, changelogs could be generated automatically by that. Commit messages are validated automatically upon commit. If you aren’t familiar with the commit message convention, you can use yarn commit (or npm run commit) instead of git commit, which provides an interactive CLI for generating proper commit messages.

### Sending a Pull Request
The core team monitors for pull requests and will review your Pull Request as quickly as possible. Please give us at least a week before pinging us reminders about the Pull Request. We will then merge it, request changes, or close it with an explanation.

Before submitting a Pull Request, please make sure that it passes all tests with `npm run test`. If you are adding a new component, please add at least basic tests for that component and ensure they pass. We also use `eslint` to maintain consistent code syntax, and you may quickly fix some of this before submitting via `npm run lintfix`. If your code does not pass the linter, it will fail `npm run test`.

If you are having issues with these things, you may submit the PR and include comments about it and ask someone to aid you in resolving. Just make sure to mark the PR as a Work In Progress (WIP).