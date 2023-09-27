import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
	palette: {
		mode: "dark"
	}
});

const root = createRoot(document.getElementById("root"));
root.render(
	<ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<App pages={["Home", "Adopt", "About", "Facts"]} />
	</ThemeProvider>
);
