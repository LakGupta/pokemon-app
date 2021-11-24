import { useState } from "react";
import "./App.css";

import { useEffect } from "react";
import PokemonContainer from "./PokemonContainer";

export default function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon");

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <div className="App">
      <h1>The Pokedex</h1>
      <div className="d-flex flex-wrap justify-content-center">
      {allPokemons.map((pokemon) => (
        <PokemonContainer
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
          image={pokemon.sprites.other.dream_world.front_default}
        />
      ))}
      </div>
     
          <button className="btn-primary btn-lg" onClick={getAllPokemons}>Load More</button>

    </div>
  );
}
