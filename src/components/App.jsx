import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NoPage from "../pages/NoPage";
import Adopt from "../pages/Adopt";
import Facts from "../pages/Facts";

function App(props) {
	const { pages } = props;

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Navbar pages={pages} />
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="adopt" element={<Adopt />} />
					<Route path="facts" element={<Facts />} />
					<Route path="about" element={<About />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</BrowserRouter>
		</Box>
	);
}

App.propTypes = {
	pages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
