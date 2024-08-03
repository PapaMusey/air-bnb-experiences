import React from "react";



export default function Card({img, rating, reviewCount, country, title, price,openSpots}) {

    let badgeText //be the badge value
    if (openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if (country === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {/* means if */ badgeText /*exists, then */ && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={img} alt="card" />
            <div>{rating}
                <img src="/img/star.png" alt="reviews " />
                <span>({reviewCount}) . </span>
                <span>{country}</span>
            </div>
            <div className="title">
                {title}
            </div>
            <div><b>${price}</b>/ person
                </div>
            
        </div>
    )
}