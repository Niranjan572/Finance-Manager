import React from "react";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import LoginIcon from "@mui/icons-material/Login";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import InfoIcon from "@mui/icons-material/Info";
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<Link className="navbar-brand" href="/"></Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="true"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/">
								MFM
								<LogoDevIcon />
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/home">
								Home
								<HomeIcon />
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/about">
								About <InfoIcon />
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/contact">
								Conact
								<ConnectWithoutContactIcon />
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" exact to="/login">
								Login
								<LoginIcon />
							</NavLink>
						</li>
					</ul>
				</div>

				<Link className="btn btn-outline-light " to="/users/add">
					Add Info
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
