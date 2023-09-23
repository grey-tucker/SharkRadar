# SharkRadar

## Setting up the environment
### Quick setup
1. Install the node packages:
	```bash
	npm i
	```
2. Run the server:
	```bash
	npm run server:watch
	```
3. Run the build:
	```bash
	npm run build:watch
	```
4. Go to: http://localhost:3030
### Setting up the node project
*(This is only necessary if you want to create a new node project)*
1. Create the node project:
	```bash
	npm init
	```
2. Install the following node packages:
	- **esbuild**: Bundles and minifies the JavaScript code
	- **React**: JavaScript frontend library
	- **Material UI**: UI component library
	- **MongoDB**: Database
	- **dotenv**: Environment variables
	- **Express**: Web server
	- **ESLint**: Helps find and fix problems in JavaScript code
	```bash
	npm init @eslint/config
	```
	```bash
	npm i react react-dom @mui/material @emotion/react @emotion/styled mongodb dotenv express
	```
	```bash
	npm i -D esbuild eslint-plugin-react-hooks
	```
### Structure
- **public**: Static files, compiled code
- **src**: Source code, uncompiled code
	- **client**: Client-side code
		- **components**: React components
		- **pages**: React pages
		- **utils**: Utility functions
- **server**: Server-side code
