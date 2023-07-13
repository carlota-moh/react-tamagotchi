import {
  FeedButton,
  GetNewPokemonButton,
  PlayButton,
  ScoldButton,
} from "../buttons/buttons";
import character from "../../assets/memecchi.png";
import { fetchPokemon } from "./functions";
import { PokeData } from "./types";

const ButtonArea = () => {
  // WIP - modify to allow user input
  const handleNewPokemonClick = (): void => {
    const pokemonName = "bulbasaur";
    const data = fetchPokemon(pokemonName)
    .then((res) => console.log(res))
    .catch(error => console.log(error));
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

const ScreenArea = () => {
  return (
    <div className="screen">
      <img src={character} alt="Character" />
    </div>
  );
};

export { ButtonArea, ScreenArea };
