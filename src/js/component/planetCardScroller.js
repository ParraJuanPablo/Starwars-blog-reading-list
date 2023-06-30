import React, { Component } from "react";
import { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import { PlanetCard } from "./planetCard";
import "../../styles/cardScroller.css";

export const PlanetCardScroller = () => {
    const { store, actions } = useContext(Context);
    const [ planets, setPlanets ] = useState([])

	function getPlanets(){
        for (let i = 1; i < 9; i++) {
            fetch("https://www.swapi.tech/api/planets/"+i.toString())
            .then(res => res.json())
            .then(data => {
                console.log(data.result);
                setPlanets(planets => [...planets, data.result]);
            })
            .catch(err => console.error(err))
          }
	};
    
    useEffect(() =>{
		getPlanets()}
	, []);
    store.planets = planets
    console.log("planets:", store.planets)
    return(
        <div className="scrollmenu">
            {planets.map((planet) => {
                return(
                    <div className="px-2 color-black">
                        <PlanetCard index={store.planets.indexOf(planet)} name={planet.properties.name} population={planet.properties.population} terrain={planet.properties.terrain}/>
                    </div>
                )
            }
            )}
        </div>
    );
};