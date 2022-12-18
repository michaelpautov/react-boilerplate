# Getting started with Implementation Facility Manager

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`
Starts unit tests

### Plop scripts
We added plop for generating base structure for ui, components, pages\
Script `yarn gec` for component, `yarn geui` for ui, `yarn gep` for page components


### Storybook [about storybook](http://localhost:3000)
`yarn storybook`\
Storybook we use for building isolated components\
**NOW IS DEPRECATED BECAUSE OF RTK QUERY**

## Setup project
Install nvm \
Run `nvm use` to get current version of node \
Install yarn globally `npm install -g yarn` \
Install packages `yarn install` \
Configure [eslint](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_activate) and [prettier](https://www.jetbrains.com/help/webstorm/prettier.html)

## Husky
Our project use git hooks [husky](https://typicode.github.io/husky/#/) for commit, push \
Every time you commit husky will run eslint for checking errors, and test when you push your changes

## Branches

Our *master* branch is similar to a *master* branch in many places.
The *master* branch should be always ready to deploy to *production*, so only reviewed, accepted and tested changes should be pushed to *master*.
New changes can only come from merging from *staging*

Our *staging* branch is similar to a *staging* branch in many places.
The *staging* branch should be always ready to deploy to *staging*, so only reviewed, accepted and tested changes
should be pushed to *staging*.
All new feature should come to *staging*
You can't push to *staging* directly, only by creating branch from them

## Branches Naming
The branch template is: `Ticket prefix + number`

For example, `LIM-344`.
