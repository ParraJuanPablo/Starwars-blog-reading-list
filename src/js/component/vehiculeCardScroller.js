import React, { Component } from "react";

import { VehiculeCard } from "./vehiculeCard";
import "../../styles/cardScroller.css";

export const VehiculeCardScroller = () => {
    return(
        <div className="scrollmenu">
            <div className="px-2 color-black">
                <VehiculeCard name="Anakin" population="Masculine" terrain="Brown"/>
            </div>
            <div className="px-2 color-black">
                <VehiculeCard name="Anakin" population="Masculine" terrain="Brown"/>
            </div>
            <div className="px-2 color-black">
                <VehiculeCard name="Anakin" population="Masculine" terrain="Brown"/>
            </div>
            <div className="px-2 color-black">
                <VehiculeCard name="Anakin" population="Masculine" terrain="Brown"/>
            </div>
        </div>
    );
};