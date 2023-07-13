interface PokeData {
  name: string;
  types: Array<object>;
  weight: number;
  img: string | undefined;
}

interface ButtonAreaProps {
  setPokemon: Dispatch<SetStateAction<PokeData | undefined>>;
}

interface ScreenAreaProps {
  pokemonData: PokeData | undefined;
  pokemonHappiness: number;
}

interface HappyAreaProps {
  pokemonHappiness: number;
}

export { PokeData, ButtonAreaProps, ScreenAreaProps, HappyAreaProps };
