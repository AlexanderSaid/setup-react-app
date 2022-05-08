# Setup React Project

In this repo I'm practicing how to setup a react project from scratch using mainly react, webpack, eslint, prettier, husky and babel among other packages.

## Steps

Recording the steps to get some reviews later.

> In main directory

- `npm init`
- `git init`
- Create `.gitignore` file.
- `npm i concurrently`
- Create `.vscode` folder.
- Set Git pre-commit using *Husky*

  ```bash
    npx husky-init && npm install
  ```

---

> In client directory

- `npm init`
- Install dependencies

  ``` bash
    react
    react-dom
    prop-types
  ```

- Install dev-dependencies

  ``` bash

    @babel/core
    @babel/preset-env
    @babel/preset-react
    babel-loader

    css-loader
    mini-css-extract-plugin 
    file-loader
    
    webpack
    webpack-cli
    webpack-dev-server
    html-webpack-plugin

    eslint 
    eslint-plugin-prettier 
    eslint-config-prettier 
    eslint-plugin-node 
    eslint-config-node

    prettier
    
    // Install Airbnb style guid 

    eslint-config-airbnb
    eslint-plugin-import
    eslint-plugin-jsx-a11y
    eslint-plugin-react
    eslint-plugin-react-hooks

  ```

- Create `.babelrc` file.
- Create `webpack.config.js` file.
- Initialize eslint config file using:

  ``` bash
  npx eslint --init
  ```

- Create `.prettierrc` file.

---

> In server directory

- `npm init`
- Install dependencies

  ``` bash
    cors
    dotenv
    express
  ```

- Install dev-dependencies

  ``` bash

    @babel/preset-env

    eslint 
    eslint-plugin-prettier 
    eslint-config-prettier 
    eslint-plugin-node 
    eslint-config-node
    
    prettier
    prettier-eslint

    nodemon
    
    // Install Airbnb style guid 

    eslint-config-airbnb-base
    eslint-plugin-import


  ```
