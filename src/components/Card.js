import React from "react";



export default function Card({coverImg, stats, location, title, price,openSpots}) {
    const { rating, reviewCount } = stats;
    let badgeText //be the badge value
    if (openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if (location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {/* means if */ badgeText /*exists, then */ && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={coverImg} alt="card" />
            <div>{rating}
                <img src="/img/star.png" alt="reviews " />
                <span>({reviewCount}) . </span>
                <span>{location}</span>
            </div>
            <div className="title">
                {title}
            </div>
            <div><b>${price}</b>/ person
                </div>
            
        </div>
    )
}