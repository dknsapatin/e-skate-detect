import React from "react";
import Card from "./Card";

const CardList = ({ eskaters }) => {
  return (
    <div>
      {eskaters.map((user, i) => {
        return (
          <Card
            key={i}
            id={eskaters[i].id}
            name={eskaters[i].name}
            email={eskaters[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
