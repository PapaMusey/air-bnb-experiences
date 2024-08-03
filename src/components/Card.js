import React from "react";



export default function Card({img, rating, reviewCount, country,title,price}) {

    return (
        <div>
            <img className="card-image" src={img} alt="card" />
            <div>{rating}
                <img src="/img/star.png" alt="reviews " />
                <span>({reviewCount}) . </span>
                <span>{country}</span>
            </div>
            <div>
                {title}
            </div>
            <div><b>${price}</b>/ person
                </div>
            
        </div>
    )
}