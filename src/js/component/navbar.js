import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<header>
			<div className="l-pad">
				<span className="logo">
					<h1>
						Foogle <span className="logo-sub">play</span>
					</h1>
				</span>
			</div>
			<div className="topbar cf">
				<span className="topbar-title l-sidebar l-pad">
					<i className="fas fa-book fa-lg" />
					<h2>Books</h2>
				</span>
			</div>
			<div />
		</header>
	);
};
