# Litchi Design Contributing Guide

Hi! We are really excited that you are interested in contributing to Litchi-Design. Before submitting your contribution, please make sure to take a moment and read through the following guide:

## Ready to start

We welcome everyone to join the construction of the project. As a pre requirement, you need have a preliminary understanding of vuejs/core, if you don't know vuejs/core this is a good [learn document for vuejs/core](https://v3.vuejs.org/). And you can refer to [GitHub's help documentation](https://help.github.com/en/github/using-git) if you don't know the basic operation of Git

The Litchi-Design repo is a monorepo using pnpm workspaces. The package manager used to install and link dependencies must be pnpm.

To develop and test the core `litchi-design` package:

1. [Fork this repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) to your own account and then clone it.
2. Create a new branch for your changes: `git checkout -b {BRANCH_NAME}`.
3. Run `pnpm install` in the root folder of Litchi Design.
4. View your change on your local document site , you need to get into root folder and run `pnpm dev`.

At any time, you can start the following steps to submit your amazing works:

1. Run `pnpm lint` check the code style.
2. Enter into root folder and run `pnpm run test` to update & run your testcase.
3. Commit message should be formatted by the rule.
4. Push code to your own repo and [create PullRequest](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) at GitHub. (Rebase before creating a PR to keep commit history clear)
