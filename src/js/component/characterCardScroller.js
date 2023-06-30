import React, { Component } from "react";
import { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import { CharacterCard } from "./characterCard";
import "../../styles/cardScroller.css";

export const CharacterCardScroller = () => {
    const { store, actions } = useContext(Context);
    const [ characters, setCharacters ] = useState([])

	function getCharacters(){
        for (let i = 1; i < 9; i++) {
            fetch("https://www.swapi.tech/api/people/"+i.toString())
            .then(res => res.json())
            .then(data => {
                console.log(data.result);
                setCharacters(characters => [...characters, data.result]);
            })
            .catch(err => console.error(err))
          }
	};
    
    useEffect(() =>{
		getCharacters()}
	, []);
    store.characters = characters
    console.log("characters:", store.characters)
    return(
        <div className="scrollmenu">
            {characters.map((character) => {
                return(
                    <div className="px-2 color-black">
                        <CharacterCard index={store.characters.indexOf(character)} name={character.properties.name} gender={character.properties.gender} hairColor={character.properties.hair_color} eyeColor={character.properties.eye_color} />
                    </div>
                )
            }
            )}
        </div>
    );
};