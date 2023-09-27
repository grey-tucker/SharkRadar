import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import PropTypes from "prop-types";
import { IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { AccountCircleOutlined } from "@mui/icons-material";

function NavbarTab(props) {
	const { text } = props;

	return (
		<Button>
			{text}
		</Button>
	);
}

function Navbar(props) {
	const { pages } = props;

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
						pages.map((tab) => (
							<NavbarTab key={tab} text={tab} />
						))
					}
				</Stack>
				<Stack direction="row">
					<Button>
						{"Sign In"}
					</Button>
					<Box>
						<IconButton onClick={handleMenu}>
							<AccountCircleOutlined />
						</IconButton>
						<Menu
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "bottom",
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
	text: PropTypes.string
};

Navbar.propTypes = {
	pages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Navbar;
