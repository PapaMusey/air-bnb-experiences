import React from "react";
// import cardData from "./cardData"
import image from "../img/image.png"
import star from "../img/star.png"


export default function Card(props) {
  
    return (
        <div>
            <img className="card-image" src={image} alt="card-image" />
            <div>{props.rating}
                <img src={star} alt="reviews image" />
                <span>({props.reviewCount}) . </span>
                <span> {props.country}</span>
            </div>
            <div>
                {props.title}
            </div>
            <div><b>${props.price}</b>/ person
                </div>
            
        </div>
    )
}