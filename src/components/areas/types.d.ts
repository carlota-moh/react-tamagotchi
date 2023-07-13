interface PokeData {
  name: string;
  types: Array<object>;
  weight: number;
  img?: string | null;
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

interface PokemonImageProps {
  pokemonData: PokeData | undefined;
}

interface CustomAlertProps {
  // open: boolean;
  // setOpen: Dispatch<SetStateAction<boolean>>;
  pokemonHappiness: number;
  pokemonData: PokeData | undefined;
}

export { PokeData, ButtonAreaProps, ScreenAreaProps, PokemonImageProps, CustomAlertProps };
