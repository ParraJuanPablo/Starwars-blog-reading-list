import React from "react";
import { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	
	function Favorites (){		
		if (store.favorites.length > 0) {

			return(
				store.favorites.map((favorite) => {
					return(
						<li><Link to={"/characterDescription/"+index} ><a className="dropdown-item">{favorite.properties.name}</a></Link><i class="fa-solid fa-x float-right exe" onClick={() => store.favorites.pop(store.favorites.indexOf(favorite))}></i></li>
					)
				}
				)
			)
		}
	}
	useEffect(() =>{
		console.log("navbar actualizado")
	}
	, [store.favorites]);
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
							Favorites {store.favorites.length}
						</button>
						<ul className="dropdown-menu dropdown-menu-lg-end">
							{Favorites()}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
