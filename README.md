# 🐛 Bugger
GitLab integrated issue viewing utility tool for private projects, where outsiders can follow development progress without having to expose the private GitLab repository.

![Bugger screenshot](https://raw.githubusercontent.com/kerkkoh/bugger/master/screenshot.png "Bugger screenshot")

So if you have let's say a SaaS product or a project, which has a repository on GitLab, and you use GitLab's issues for internal task/project management and process tracking. Then at some point, after you release the product, your users are very happy, but over time they start noticing bugs or features that they would want in the product. You then assure the users that you have acknowledged the bug/feature request in your internal issue tracker, and then the user has to take your word for it and just wait patiently to see if their feature ever gets added or their bug ever gets fixed. This your users don't like. They would love to see the process happening on the project.

Obviously, you don't want to just expose the entire GitLab repository to your userbase. That's where **🐛 Bugger** comes in to help you out: *an easy to configure extendable NodeJS/React app, that exposes just the right amount of issues from your private GitLab repository*.


Yes, I do acknowledge that it is *extremely* ironic that this code is currently on GitHub.
