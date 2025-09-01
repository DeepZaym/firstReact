import React from "react";
import "./Card.css";

const CardProduk = ({ name, price, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>Rp {price}</h4>
        <div className="card-buttons">
          <button className="btn">Beli</button>
          <button className="btn">Detail</button>
        </div>
      </div>
    </div>
  );
};

export default CardProduk;
