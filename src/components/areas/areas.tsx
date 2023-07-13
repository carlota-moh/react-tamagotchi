import {
  FeedButton,
  GetNewPokemonButton,
  PlayButton,
  ScoldButton,
} from "../buttons/buttons";
import { fetchPokemon } from "./functions";
import { ScreenAreaProps, ButtonAreaProps } from "./types";
import {
  Battery20,
  Battery50,
  Battery80,
  BatteryFull,
} from "@mui/icons-material";
import { Alert } from "@mui/material";

const ButtonArea = ({
  setPokemon,
  pokemonHappiness,
  setHappiness,
}: ButtonAreaProps) => {
  // WIP - modify to allow user input

  const handleNewPokemonClick = (): void => {
    const pokemonName = "bulbasaur";

    fetchPokemon(pokemonName)
      .then((res) => setPokemon(res))
      .catch((error) => console.log(error));
  };

  const handlePlayClick = () => {
    if (pokemonHappiness < 100) {
      const newHappiness = pokemonHappiness + 20;
      setHappiness(newHappiness);
    }
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
        <PlayButton onGetClick={handlePlayClick}/>
      </span>
      <span>
        <ScoldButton />
      </span>
    </div>
  );
};

const CustomBatteryIcon = ({ pokemonHappiness }: ScreenAreaProps) => {
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

const CustomAlert = ({ pokemonHappiness, pokemonData }: ScreenAreaProps) => {
  if (pokemonHappiness === 100 && pokemonData) {
    return <Alert severity="success">{pokemonData.name} is super happy!</Alert>
  }
};

const HappyArea = ({ pokemonData, pokemonHappiness }: ScreenAreaProps) => {
  return (
    <div className="battery-icon">
      <span>
        <CustomBatteryIcon pokemonHappiness={pokemonHappiness} />
      </span>
      <span>
        <p className="battery-text">{pokemonHappiness}</p>
      </span>
      <span>
        <CustomAlert pokemonHappiness={pokemonHappiness} pokemonData={pokemonData}/>
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
        <HappyArea pokemonHappiness={pokemonHappiness} pokemonData={pokemonData} />
        <div className="weight-div">Weight: {pokemonData.weight}</div>
      </div>
      <img src={pokemonData.img} alt="Character" className="pokemon-img" />
    </div>
  );
};

export { ButtonArea, ScreenArea };
