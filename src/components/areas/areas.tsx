import {
  FeedButton,
  GetNewPokemonButton,
  PlayButton,
  ScoldButton,
} from "../buttons/buttons";
import { fetchPokemon } from "./functions";
import { ScreenAreaProps, ButtonAreaProps } from "./types";
import { Battery20, Battery50, BatteryFull } from "@mui/icons-material";

const ButtonArea = ({ setPokemon }: ButtonAreaProps) => {
  // WIP - modify to allow user input

  const handleNewPokemonClick = (): void => {
    const pokemonName = "bulbasaur";

    fetchPokemon(pokemonName)
      .then((res) => setPokemon(res))
      .catch((error) => console.log(error));
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

  return (
    <div className="screen">
      <div className="stat-menu">
        <div className="battery-icon">
          <span>
            <Battery20 color="error" fontSize="large"></Battery20>
          </span>
          <span>
            <p className="battery-text">20</p>
          </span>
        </div>
        <div className="weight-div">Weight: {pokemonData.weight}</div>
      </div>
      <img src={pokemonData.img} alt="Character" className="pokemon-img" />
    </div>
  );
};

export { ButtonArea, ScreenArea };
