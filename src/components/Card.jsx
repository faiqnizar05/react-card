import React  from 'react';
import "./Card.css";

export const Card = ({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link,
    harga,

}) => {
    return (
        <div className="card-container">
            <img src={imgSrc} alt={imgAlt} className="card-img" />
            <h1 className="card-title">{title}</h1>
            <p className="card-description">
                {description}
            </p>
            <p className="harga">{harga}</p>
             <a href="cardPage" className="card-btn">{buttonText}</a>
        </div>
        
    )
}