import React, { useContext } from "react";

import Card from "./Card";
import "./main.css";
import PokeInfo from "./PokeInfo";
import { context } from "../utils/context";
const Main = () => {
  const { pokemon, pokemonDescription, page, setPage } = useContext(context);
  // const [pokemon, setPokemon] = useState([]);
  // const [pokemonDescription, setPokemonDescription] = useState();
  // const [page, setPage] = useState(1);

  // const getPokemon = async () => {
  //   const res = await axios.get(`http://localhost:3000/users.json`);
  //   // console.log(res);
  //   setPokemon(res.data);
  // };
  // useEffect(() => {
  //   getPokemon();
  // }, []);
  // console.log(pokemon);
  console.log(pokemonDescription);

  return (
    <div className="container">
      <div className="left-content">
        {pokemon.slice((page - 1) * 20, 20 * page).map((ele) => (
          <Card
            key={ele.id}
            data={ele.data}
            // setPokemonDescription={setPokemonDescription}
            // pokemon={pokemon}
            id={ele.id}
          />
        ))}
        <div className="btn-group">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            previous
          </button>
          <button onClick={() => setPage(page + 1)}>next</button>
        </div>
      </div>
      <div className="right-content">
        <PokeInfo pokemonDescription={pokemonDescription} />
      </div>
    </div>
  );
};

export default Main;
