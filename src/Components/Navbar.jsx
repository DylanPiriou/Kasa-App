import React from "react";
import { NavLink } from "react-router-dom";
import NavLogo from "../Assets/logos/kasa-nav-logo.svg";
import "../Assets/styles/Navbar.scss";

export default function Navbar() {
	return (
		<div className="navbar">
			<NavLink to="/Kasa-App">
				<img src={NavLogo} className="logo-kasa" alt="Logo de Kasa" />
			</NavLink>
			<nav>
				<NavLink to="/Kasa-App">Accueil</NavLink>
				<NavLink to="/Kasa-App/a-propos">A Propos</NavLink>
			</nav>
		</div>
	);
}
