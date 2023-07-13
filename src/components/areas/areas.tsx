import {
  FeedButton,
  GetNewPokemonButton,
  PlayButton,
  ScoldButton,
} from "../buttons/buttons";
import character from "../../assets/memecchi.png";
import { fetchPokemon } from "./functions";
import { ScreenAreaProps, ButtonAreaProps } from "./types";

const ButtonArea = ({ setPokemon }: ButtonAreaProps) => {
  // WIP - modify to allow user input

  const handleNewPokemonClick = (): void => {
    const pokemonName = "bulbasaur";

    fetchPokemon(pokemonName)
      .then((res) => setPokemon(res))
      .catch((error) => console.log(error));
    ;
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

const ScreenArea = ({ pokemonData }: ScreenAreaProps) => {
  if (!pokemonData) {
    return (
      <div className="screen">
        <p className="welcome-message">Press New button to start playing!</p>
      </div>
    );
  }

  const pokeIcon = pokemonData.img;
  return (
    <div className="screen">
      <img src={pokeIcon} alt="Character" />
    </div>
  );
};

export { ButtonArea, ScreenArea };
