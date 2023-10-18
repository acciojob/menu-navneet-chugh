import React from "react";


const Card = ({ img , title,price,desc})=>(
    <div className="Card">
    <div className="image-section">
        <img src={img}></img>
    </div>
    <div className="details-section">
         <div className="item-title">
            <b className="item-name">{title}</b>
            <span className="item-price">$ {price}</span>
         </div>
         <div className="description">{desc}</div>
    </div>
</div>
)

export default Card;