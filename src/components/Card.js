import React from "react";
import cardData from "./cardData"
import image from "../img/image.png"

export default function Card() {
    return (
        <div>
            <img className="card-image" src={image} alt="card-image" />
            <div>6.0</div>
            <div>Life lessons with Katie Zaferes
            </div>
            <div><b>From $136</b>/ person
                </div>
            
        </div>
    )
}