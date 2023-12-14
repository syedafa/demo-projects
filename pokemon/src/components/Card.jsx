import React, { useContext } from "react";
import { context } from "../utils/context";
import "./card.css";
const Card = ({ data, id }) => {
  const { pokemon, setPokemonDescription } = useContext(context);
  //   console.log(data);
  return (
    <div
      className="card"
      onClick={() => setPokemonDescription(pokemon[id - 1])}
    >
      <h2>{id}</h2>
      <img src={data.img} alt="" />
      <h2>{data.name}</h2>
    </div>
  );
};

export default Card;
