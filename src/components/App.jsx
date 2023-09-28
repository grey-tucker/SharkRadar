import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";

function App(props) {
	const { tabs, routes } = props;

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Navbar tabs={tabs} />
			<Routes>
				{
					routes.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							element={<route.element />}
							index={route.index}
						/>
					))
				}
			</Routes>
		</Box>
	);
}

App.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
	routes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
