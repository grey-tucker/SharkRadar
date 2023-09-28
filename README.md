# SharkRadar

## Setting up the environment

### Quick setup

1. Clone the repository
2. Install the node packages:
    ```bash
    npm i
    ```
3. Create the `.env` file in the root directory and add the following:
    ```bash
    DB_USERNAME=<username>
    DB_PASSWORD=<password>
    PORT=3030
    ```
    *(replace `<>` fields with user credentials)*
4. Run the build:
    ```bash
    npm run build
    ```
    *(or `build:watch` to watch for changes)*
5. Run the server:
    ```bash
    npm run server
    ```
    *(or `server:watch` to watch for changes)*
6. Go to: http://localhost:3030

### Packages used

- **esbuild**: Bundles and minifies the JavaScript code
- **React**: JavaScript frontend library
- **Material UI**: UI component library
- **MongoDB**: Database
- **dotenv**: Environment variables
- **Express**: Web server
- **ESLint**: Helps find and fix problems in JavaScript code

*(Do not run the scripts below if you have cloned the repo and ran `npm i`)*

```bash
npm init @eslint/config
```
```bash
npm i @mui/icons-material @mui/material @emotion/styled @emotion/react mongodb
```
```bash
npm i -D esbuild eslint-plugin-react-hooks express dotenv react react-dom react-router-dom
```

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
- **/misc**: Whatever you want!
