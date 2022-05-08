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

- *Finally add all related scripts to `package.json`*

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

- *Finally add all related scripts to `package.json`*

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

- Create `babel.config.cjs` file.
- Initialize eslint config file using:

  ``` bash
  npx eslint --init
  ```

- Create `.prettierrc` file.

- *Finally add all related scripts to `package.json`*

---

### Notes

- This setup doesn't use `create-react-app`.
- This setup doesn't contain testing configurations.

---

### Check the code locally

After cloning the repo go to main directory and run following:

`npm install`

`npm run setup`

The first command will install some small libraries needed for running the rest of the commands. The second will go into the client and server directories and set those up to be ran.

In the server directory there is `.env.example` file. Create a copy and rename that to `.env`. The port is already set, but you can choose whatever you like.

To run the app in dev mode you can run the following command in the main directory:

`npm run dev`

This will run the server and log a message in console, and open a new browser tab on localhost:8080 .
