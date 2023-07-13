interface PokeData {
  name: string;
  types: Array<object>;
  weight: number;
  img: string | undefined;
}

interface ButtonAreaProps {
  setPokemon: Dispatch<SetStateAction<PokeData | undefined>>;
  pokemonHappiness: number;
  setHappiness: Dispatch<SetStateAction<number>>;
}

interface ScreenAreaProps {
  pokemonData?: PokeData | undefined;
  pokemonHappiness: number;
}

export { PokeData, ButtonAreaProps, ScreenAreaProps };
