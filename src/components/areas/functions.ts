import Pokedex, { Pokemon } from "pokedex-promise-v2";
import { PokeData } from "./types";

const fetchPokemon = (pokemonID: number | string): Promise<void | PokeData> => {
  const P = new Pokedex();
  return P.getPokemonByName(pokemonID)
    .then((res) => parsePokemon(res))
    .catch((error) => alert(`Invalid Pokémon name`));
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
