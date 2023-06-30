import React, { Component } from "react";

import { PlanetCard } from "./planetCard";
import "../../styles/cardScroller.css";

export const PlanetCardScroller = () => {
    return(
        <div className="scrollmenu">
            <div className="px-2 color-black">
                <PlanetCard name="Anakin" population="Masculine" terrain="Brown"/>
            </div>
            <div className="px-2 color-black">
                <PlanetCard name="Anakin" population="Masculine" terrain="Brown"/>
            </div>
            <div className="px-2 color-black">
                <PlanetCard name="Anakin" population="Masculine" terrain="Brown"/>
            </div>
            <div className="px-2 color-black">
                <PlanetCard name="Anakin" population="Masculine" terrain="Brown"/>
            </div>
        </div>
    );
};