import { useState, useContext } from "react";
import { pokemonDataContext, pokemonHappinessContext } from "../../App";
import {
  FeedButton,
  GetNewPokemonButton,
  PlayButton,
  ScoldButton,
} from "../buttons/buttons";
import {
  Battery20,
  Battery50,
  Battery80,
  BatteryFull,
} from "@mui/icons-material";
import { Alert, Snackbar } from "@mui/material";
import { fetchPokemon } from "./functions";

const ButtonArea = () => {
  const { pokemonData, dispatchData } = useContext(pokemonDataContext);
  const { pokemonHappiness, dispatchHappy } = useContext(
    pokemonHappinessContext
  );

  const handleNewPokemonClick = async () => {
    dispatchHappy({type: "new"})
    const pokemonID = Math.floor(Math.random() * 150 + 1);
    const pokemonData = await fetchPokemon(pokemonID);
    dispatchData({type: "new", pokemonData: pokemonData})
  };

  return (
    <div className="button-area">
      <span>
        <GetNewPokemonButton onGetClick={handleNewPokemonClick} />
      </span>
      <span>
        <FeedButton onGetClick={() => dispatchData({ type: "feed" })} />
      </span>
      <span>
        <PlayButton onGetClick={() => dispatchHappy({ type: "play" })} />
      </span>
      <span>
        <ScoldButton onGetClick={() => dispatchHappy({ type: "scold" })} />
      </span>
    </div>
  );
};

const CustomBatteryIcon = () => {
  const { pokemonHappiness, dispatchHappy } = useContext(
    pokemonHappinessContext
  );

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

const CustomAlert = () => {
  const [open, setOpen] = useState(true);
  const { pokemonData, dispatchData } = useContext(pokemonDataContext);
  const { pokemonHappiness, dispatchHappy } = useContext(
    pokemonHappinessContext
  );

  if (pokemonData) {
    switch (pokemonHappiness) {
      case 100:
        return (
          <Snackbar
            open={open}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert severity="success">{pokemonData.name} is super happy!</Alert>
          </Snackbar>
        );
      case 0:
        return (
          <Snackbar
            open={open}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert severity="error">{pokemonData.name} is super sad!</Alert>
          </Snackbar>
        );
    }
  }
};

const HappyArea = () => {
  const { pokemonHappiness, dispatchHappy } = useContext(
    pokemonHappinessContext
  );
  return (
    <div className="battery-icon">
      <span>
        <CustomBatteryIcon />
      </span>
      <span>
        <p className="battery-text">{pokemonHappiness}</p>
      </span>
      <span>
        <CustomAlert />
      </span>
    </div>
  );
};

const PokemonImage = () => {
  const { pokemonData, dispatchData } = useContext(pokemonDataContext);

  if (!pokemonData || !pokemonData.img) {
    return <div></div>;
  }

  return <img src={pokemonData.img} alt="Character" className="pokemon-img" />;
};

const ScreenArea = () => {
  const { pokemonData, dispatchData } = useContext(pokemonDataContext);

  if (!pokemonData) {
    return (
      <div className="screen">
        <h1 className="welcome-message">Press New button to start playing!</h1>
      </div>
    );
  }

  return (
    <div className="screen">
      <div className="stat-menu">
        <HappyArea />
        <div className="weight-div">Weight: {pokemonData.weight}</div>
      </div>
      <PokemonImage />
    </div>
  );
};

export { ButtonArea, ScreenArea };
