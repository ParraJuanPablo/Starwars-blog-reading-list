import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


import { CharacterCardScroller } from "../component/characterCardScroller";
import { PlanetCardScroller } from "../component/planetCardScroller";

export const Home = () => {

	
	return(
		<div className="px-5 text-danger">
			<h1 className="py-3">Characters</h1>
			<CharacterCardScroller />
			<h1 className="py-3">Planets</h1>
			<PlanetCardScroller />
		</div>

	)
};