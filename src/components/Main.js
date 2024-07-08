import React from "react";
import Group from "../img/Group.png"

export default function Main(){
    return(
        <main>
        <img  className="main-image" src={Group} alt="Group image" /> 
        <div>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
        </main>
    )
}