import {
  FeedButton,
  GetNewPokemonButton,
  PlayButton,
  ScoldButton,
} from "../buttons/buttons";
import character from "../../assets/memecchi.png";
import { fetchPokemon } from "./functions";
import { PokeData, ScreenAreaProps, ButtonAreaProps } from "./types";

const ButtonArea = ({setPokemon}: ButtonAreaProps) => {
  // WIP - modify to allow user input

  const handleNewPokemonClick = (): void => {
    const pokemonName = "bulbasaur";

    const newPokemon = fetchPokemon(pokemonName)
    .then((res) => console.log(res))
    .catch(error => console.log(error));

    setPokemon(newPokemon);
    
  };

  return (
    <div className="button-area">
      <span>
        <GetNewPokemonButton onGetClick={handleNewPokemonClick} />
      </span>
      <span>
        <FeedButton />
      </span>
      <span>
        <PlayButton />
      </span>
      <span>
        <ScoldButton />
      </span>
    </div>
  );
};

const ScreenArea = (pokemonData: ScreenAreaProps) => {
  return (
    <div className="screen">
      <img src={character} alt="Character" />
    </div>
  );
};

export { ButtonArea, ScreenArea };
