import "./StartPage.css"
import airplane from "../../Airplane.gif";
import React from "react";

const StartPage = () => {
    return (
        <div>
            <h1 className="h1_1">Willkommen an Bord!</h1>
        </div> &&
        <div className="pseudo">
            <button><a href="/public/index.html">Logout</a></button>
        </div> &&
        <div className="animatedAirplane">
            <img src={airplane} width="400" height="300" alt="airplane"/>
        </div>
    );
};

export default StartPage;