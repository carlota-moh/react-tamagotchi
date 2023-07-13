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
}

export { PokeData, ButtonAreaProps, ScreenAreaProps };
