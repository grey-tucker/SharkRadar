# SharkRadar

## Setting up the environment

### Quick setup

1. Install the node packages:
    ```bash
    npm i
    ```
2. Run the build:
    ```bash
    npm run build
    ```
    *(or `build:watch` to watch for changes)*
3. Run the server:
    ```bash
    npm run server
    ```
    *(or `server:watch` to watch for changes)*
4. Go to: http://localhost:3030

### Setting up the node project

*(This is only necessary if you want to create a new node project)*

1. Create the node project:
    ```bash
    npm init
    ```
2. Install the following node packages:
    ```bash
    npm init @eslint/config
    ```
    ```bash
    npm i @mui/icons-material @mui/material @emotion/styled @emotion/react mongodb
    ```
    ```bash
    npm i -D esbuild eslint-plugin-react-hooks express dotenv react react-dom react-router-dom
    ```
    **Purpose of packages:**
    - **esbuild**: Bundles and minifies the JavaScript code
    - **React**: JavaScript frontend library
    - **Material UI**: UI component library
    - **MongoDB**: Database
    - **dotenv**: Environment variables
    - **Express**: Web server
    - **ESLint**: Helps find and fix problems in JavaScript code

### Structure

- **/public**: Static files, compiled code
- **/src**: Source code, uncompiled code
    - **/client**: Client-side code
        - **/components**: React components
        - **/pages**: React pages
        - **/styles**: CSS styles
        - **/utils**: Utility functions
- **/server**: Server-side code
    - **/routes**: Express routes for API components
