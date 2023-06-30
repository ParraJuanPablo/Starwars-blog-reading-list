import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDescription = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron overflow-hidden">
			<div className="row overflow-hidden">
                <div className="col-6">
                    <img src="https://www.vinaporta.cl/wp-content/uploads/2021/03/800x600.png" className="card-img-top p-2" alt="..." />
                </div>
                <div className="col-6 text-center">
                    <h1 className="p-2">{store.characters[params.theid].properties.name}</h1>
                    <p className="py-2 pl-2 pr-0">{store.characters[params.theid].description}</p>
                </div>
                <hr />
                <div className="row">
                    <div className="col-2 text-center">Name: <br />{store.characters[params.theid].properties.name}</div>
                    <div className="col-2 text-center">Birth: <br />{store.characters[params.theid].properties.birth_year}</div>
                    <div className="col-2 text-center">Gender: <br />{store.characters[params.theid].properties.gender}</div>
                    <div className="col-2 text-center">Height: <br />{store.characters[params.theid].properties.height}</div>
                    <div className="col-2 text-center">Hair Color: <br />{store.characters[params.theid].properties.hair_color}</div>
                    <div className="col-2 text-center">Eye Color: <br />{store.characters[params.theid].properties.eye_color}</div>
                </div>
            </div>
		</div>
	);
};

CharacterDescription.propTypes = {
	match: PropTypes.object
};
