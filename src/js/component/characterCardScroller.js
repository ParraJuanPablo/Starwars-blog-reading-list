import React, { Component } from "react";

import { CharacterCard } from "./characterCard";
import "../../styles/cardScroller.css";

export const CharacterCardScroller = () => {
    return(
        <div className="scrollmenu">
            <div className="px-2 color-black">
                <CharacterCard name="Anakin" gender="Masculine" hairColor="Brown" eyeColor="Blue" />
            </div>
            <div className="px-2 color-black">
                <CharacterCard name="Anakin" gender="Masculine" hairColor="Brown" eyeColor="Blue" />
            </div>
            <div className="px-2 color-black">
                <CharacterCard name="Anakin" gender="Masculine" hairColor="Brown" eyeColor="Blue" />
            </div>
            <div className="px-2 color-black">
                <CharacterCard name="Anakin" gender="Masculine" hairColor="Brown" eyeColor="Blue" />
            </div>
        </div>
    );
};