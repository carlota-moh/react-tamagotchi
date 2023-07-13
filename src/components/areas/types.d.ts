interface PokeData {
  name: string;
  types: Array<object>;
  weight: number;
  img: string | null;
}

interface ButtonAreaProps {
  setPokemon?: any;
}

interface ScreenAreaProps {
  pokemonData: PokeData | undefined;
}

export { PokeData, ButtonAreaProps, ScreenAreaProps };
