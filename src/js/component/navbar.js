import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
			<div className="px-5">
				<a className="navbar-brand" href="#">
					<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" width="128" height="72" alt="" />
				</a>
			</div>
			<div className="px-5">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<div className="btn-group">
						<button type="button" className="btn btn-lg btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu dropdown-menu-lg-end">
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
