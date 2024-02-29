import React from "react";

const Card = ({ animalFavorito, razaFavorita }) => {
  return (
    <div className="card">
      <h2>Tu animal Favorito</h2>
      <p>{animalFavorito}</p>
      <h2>Tu raza favorita</h2>
      <p>{razaFavorita}</p>
    </div>
  );
};

export default Card;
