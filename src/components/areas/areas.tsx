import {
  FeedButton,
  GetNewPokemonButton,
  PlayButton,
  ScoldButton,
} from "../buttons/buttons";
import { fetchPokemon } from "./functions";
import { ScreenAreaProps, ButtonAreaProps, HappyAreaProps } from "./types";
import {
  Battery20,
  Battery50,
  Battery80,
  BatteryFull,
} from "@mui/icons-material";

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

const CustomBatteryIcon = ({ pokemonHappiness }: HappyAreaProps) => {
  if (pokemonHappiness <= 20) {
    return <Battery20 color="error" fontSize="large"></Battery20>;
  } else if (20 < pokemonHappiness && pokemonHappiness <= 50) {
    return <Battery50 color="warning" fontSize="large"></Battery50>;
  } else if (50 < pokemonHappiness && pokemonHappiness <= 80) {
    return <Battery80 color="success" fontSize="large"></Battery80>;
  } else {
    return <BatteryFull color="success" fontSize="large"></BatteryFull>;
  }
};

const HappyArea = ({ pokemonHappiness }: HappyAreaProps) => {
  return (
    <div className="battery-icon">
      <span>
        <CustomBatteryIcon pokemonHappiness={pokemonHappiness} />
      </span>
      <span>
        <p className="battery-text">{pokemonHappiness}</p>
      </span>
    </div>
  );
};

const ScreenArea = ({ pokemonData, pokemonHappiness }: ScreenAreaProps) => {
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
        <HappyArea pokemonHappiness={pokemonHappiness} />
        <div className="weight-div">Weight: {pokemonData.weight}</div>
      </div>
      <img src={pokemonData.img} alt="Character" className="pokemon-img" />
    </div>
  );
};

export { ButtonArea, ScreenArea };
