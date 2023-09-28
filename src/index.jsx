import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageRoute from "./utils/route";
import AdoptPage from "./pages/AdoptPage";
import AboutPage from "./pages/AboutPage";
import FactsPage from "./pages/FactsPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import NoPage from "./pages/NoPage";

const darkTheme = createTheme({
	palette: {
		mode: "dark"
	}
});

const tabs = [
	["Home", "/"],
	["Adopt", "/adopt"],
	["About", "/about"],
	["Facts", "/facts"]
];

const routes = [
	new PageRoute("/", HomePage, true),
	new PageRoute("/adopt", AdoptPage),
	new PageRoute("/about", AboutPage),
	new PageRoute("/facts", FactsPage),
	new PageRoute("/login", LoginPage),
	new PageRoute("/profile", ProfilePage),
	new PageRoute("*", NoPage),
];

const root = createRoot(document.getElementById("root"));
root.render(
	<ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<BrowserRouter>
			<App
				tabs={tabs}
				routes={routes}
			/>
		</BrowserRouter>
	</ThemeProvider>
);
