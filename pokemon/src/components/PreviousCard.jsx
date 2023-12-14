import React from "react";
import "./previousCard.css";
const PreviousCard = ({ data }) => {
  return (
    <div className="prv-crd">
      <h5>{data.name}</h5>
      <hr />
      <h5>hp:{data.hp}</h5>
      <h5>attack:{data.attack}</h5>
      <h5>defence:{data.defence}</h5>
      <h5>special-attack:{data.special_attack}</h5>
      <h5>special-defence:{data.special_defense}</h5>
      <h5>speed:{data.speed}</h5>
    </div>
  );
};

export default PreviousCard;
