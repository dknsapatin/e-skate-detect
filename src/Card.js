import React from "react";
import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-whites dib br3 pa4 ma3 grow bw2 shadow-1 tc">
      <img alt="eskators" src={`${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
