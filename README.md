# 🐛 Bugger

[![GitHub license](https://img.shields.io/github/license/kerkkoh/bugger)](https://github.com/kerkkoh/bugger/blob/master/LICENSE.md)

GitLab integrated issue viewing utility tool for private projects, where outsiders can follow development progress without having to expose the private GitLab repository.

![Bugger screenshot](https://raw.githubusercontent.com/kerkkoh/bugger/master/screenshot.png "Bugger screenshot")

Yes, I do acknowledge that it is _extremely_ ironic that this code is currently on GitHub.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

### Background

So if you have let's say a SaaS product or a project, which has a repository on GitLab, and you use GitLab's issues for internal task/project management and process tracking. Then at some point, after you release the product, your users are very happy, but over time they start noticing bugs or features that they would want in the product. You then assure the users that you have acknowledged the bug/feature request in your internal issue tracker, and then the user has to take your word for it and just wait patiently to see if their feature ever gets added or their bug ever gets fixed. This your users don't like. They would love to see the process happening on the project.

Obviously, you don't want to just expose the entire GitLab repository to your userbase. That's where **🐛 Bugger** comes in to help you out: _an easy to configure extendable NodeJS/React app, that exposes just the right amount of issues from your private GitLab repository_.

## Install

First, clone the repository from github.

Now you're going to need to setup some configuration files and environmental variables:

1. Navigate to `bugger/backend`, and rename the file called `.env.template` to just `.env`
2. Set the variables in the `.env` file without inserting any spaces anywhere in the file. The variable names and comments should explain where to put what adequately. Save the file.

Now you need to build the frontend and move the built folder into the backend and install everything.

```
cd bugger/frontend
npm install && npm run build
```

Depending on the operating system, the command for moving the build folder varies, on Linux:

```
mv build ../backend
```

and on Windows:

```
move build ../backend
```

And then to install & build the backend:

```
cd ../backend
npm install && npm run build
```

## Usage

To run the server, make sure you're in the `bugger/backend` folder, and run:

```
npm start
```

This will start the server, and host the production build frontend with the port `process.env.PORT` or 3001. You can set the PORT variable in the file `bugger/backend/.env` by creating a new line with the port you want the system to run on. If you're using services like Heroku to host the system, they should set this variable for you.

## Contributing

PRs accepted.

## License

[MIT License](https://github.com/kerkkoh/bugger/LICENSE.md)
