import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDescription = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron overflow-hidden">
			<div className="row overflow-hidden">
                <div className="col-6">
                    <img src="https://www.vinaporta.cl/wp-content/uploads/2021/03/800x600.png" className="card-img-top p-2" alt="..." />
                </div>
                <div className="col-6 text-center">
                    <h1 className="p-2">{store.planets[params.theid].properties.name}</h1>
                    <p className="py-2 pl-2 pr-0">{store.planets[params.theid].description}</p>
                </div>
                <hr />
                <div className="row">
                    <div className="col-2 text-center">Name: <br />{store.planets[params.theid].properties.name}</div>
                    <div className="col-2 text-center">Diameter: <br />{store.planets[params.theid].properties.diameter}</div>
                    <div className="col-2 text-center">Gravity: <br />{store.planets[params.theid].properties.gravity}</div>
                    <div className="col-2 text-center">Population: <br />{store.planets[params.theid].properties.population}</div>
                    <div className="col-2 text-center">Terrain: <br />{store.planets[params.theid].properties.terrain}</div>
                    <div className="col-2 text-center">Climate: <br />{store.planets[params.theid].properties.climate}</div>
                </div>
            </div>
		</div>
	);
};

PlanetDescription.propTypes = {
	match: PropTypes.object
};
