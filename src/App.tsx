// import "./styles.css";
import { ScreenArea, ButtonArea } from "./components/areas/areas";
import { useState } from "react";
import { PokeData } from "./components/areas/types";

const App = () => {
  const [pokemonData, setPokemon] = useState<PokeData>();
  const [pokemonHappiness, setHappiness] = useState(0);

  return (
    <div className="tamagotchi">
      <ScreenArea
        pokemonData={pokemonData}
        pokemonHappiness={pokemonHappiness}
      />
      <ButtonArea
        pokemonData={pokemonData}
        setPokemon={setPokemon}
        pokemonHappiness={pokemonHappiness}
        setHappiness={setHappiness}
      />
    </div>
  );
};

export default App;