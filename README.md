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
### Setting up from scratch
1. Install Node.js
2. Install these Visual Studio Code extensions:
	- **EditorConfig for VS Code**: Maintains consistent coding styles between different editors and IDEs
		- Changed Settings:
			- Indentation: Tab
			- Indentation Size: 4
			- End of Line: LF
			- Trim Trailing Whitespace: true
3. Create the node project:
	```bash
	npm init
	```
4. Install the following node packages:
	- **esbuild**: Bundles and minifies the JavaScript code
	- **React**: JavaScript frontend library
	- **Material UI**: UI component library
	- **MongoDB**: Database
	- **dotenv**: Environment variables
	- **Express**: Web server
	- **ESLint**: Helps find and fix problems in JavaScript code
	```bash
	npm init @eslint/config
	npm i react react-dom @mui/material @emotion/react @emotion/styled mongodb dotenv express
	npm i -D esbuild eslint-plugin-react-hooks
	```
