import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const context = createContext();
const AppContext = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonDescription, setPokemonDescription] = useState();
  const [page, setPage] = useState(1);

  const getPokemon = async () => {
    const res = await axios.get(`http://localhost:3000/users.json`);
    // console.log(res);
    setPokemon(res.data);
  };
  useEffect(() => {
    getPokemon();
  }, []);
  // console.log(pokemon);
  // console.log(pokemonDescription);
  return (
    <context.Provider
      value={{
        pokemon,
        setPokemon,
        pokemonDescription,
        setPokemonDescription,
        page,
        setPage,
      }}
    >
      {children}
    </context.Provider>
  );
};
export default AppContext;
