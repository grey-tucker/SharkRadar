import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import PropTypes from "prop-types";
import { IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { AccountCircleOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

function NavbarTab(props) {
	const { text, target } = props;

	return (
		<Link to={target} style={{ textDecoration: "none" }}>
			<Button>
				{text}
			</Button>
		</Link>
	);
}

function Navbar(props) {
	const { tabs } = props;

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Stack direction="row" sx={{ flexGrow: 1 }}>
					{
						tabs.map(([tabText, tabTarget]) => (
							<NavbarTab key={tabText} text={tabText} target={tabTarget} />
						))
					}
				</Stack>
				<Stack direction="row">
					<Link to="/login">
						<Button>
							{"Sign In"}
						</Button>
					</Link>
					<Box>
						<IconButton onClick={handleMenu}>
							<AccountCircleOutlined />
						</IconButton>
						<Menu
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>{"Profile"}</MenuItem>
							<MenuItem onClick={handleClose}>{"Logout"}</MenuItem>
						</Menu>
					</Box>
				</Stack>
			</Toolbar>
		</AppBar>
	);
}

NavbarTab.propTypes = {
	text: PropTypes.string,
	target: PropTypes.string,
};

Navbar.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

export default Navbar;
