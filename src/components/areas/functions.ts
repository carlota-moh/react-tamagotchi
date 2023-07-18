import Pokedex, { Pokemon } from "pokedex-promise-v2";
import { PokeData } from "./types";

const fetchPokemon = (pokemonID: number): Promise<void | PokeData> => {
  const P = new Pokedex();
  return P.getPokemonByName(pokemonID)
    .then((res) => parsePokemon(res))
    .catch((error) => console.log("There has been an error: ", error));
};

const parsePokemon = (res: Pokedex.Pokemon): PokeData => {
  const PokeData: PokeData = {
    name: res.name,
    types: res.types,
    weight: res.weight,
    img: res.sprites.front_default,
  };

  return PokeData;
};

export { fetchPokemon, parsePokemon };
