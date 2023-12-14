import React from "react";
import { Link } from "react-router-dom";
import "./pokeInfo.css";
const PokeInfo = ({ pokemonDescription }) => {
  console.log(pokemonDescription);
  return (
    <div>
      {pokemonDescription ? (
        <div className="pokeinfo">
          <h1>{pokemonDescription?.data.name}</h1>
          <img src={pokemonDescription?.data.img} alt="" />
          <div className="abilities">
            {pokemonDescription?.data?.abilities.map((ele, i) => (
              <div className="group" key={i}>
                <h2>{ele}</h2>
              </div>
            ))}
          </div>
          <div className="base-stat">
            <h3>hp:{pokemonDescription?.data.hp}</h3>
            <h3>attack:{pokemonDescription?.data.attack}</h3>
            <h3>defense:{pokemonDescription?.data.defence}</h3>
            <h3>special-attack:{pokemonDescription?.data.special_attack}</h3>
            <h3>special-defence:{pokemonDescription?.data.special_defense}</h3>
            <h3>speed:{pokemonDescription?.data.speed}</h3>
          </div>
        </div>
      ) : (
        <h1>Please select a pokemon</h1>
      )}
      <Link to="/battle">
        <button className="game">start the battle</button>
      </Link>
    </div>
  );
};

export default PokeInfo;
