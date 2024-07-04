import { Route, Routes } from "react-router-dom";
import RootPage from "./Root";
import ErrorPage from "./ErrorPage";
import Tamagotchi from "./Tamagotchi";
import PokeFormPage from "./Pokeform";
import { createContext, useReducer } from "react";

export const pokemonDataContext = createContext<any>(undefined);
export const pokemonHappinessContext = createContext<any>(0);

const buttonHappinessReducer = (happinessState: any, action: any) => {
  switch (action.type) {
    case "new":
      return 40;
    case "play":
      if (happinessState < 100) {
        const newHappiness = happinessState + 20;
        return newHappiness;
      }
      return happinessState;
    case "scold":
      if (happinessState > 0) {
        const newHappiness = happinessState - 20;
        return newHappiness;
      }
      return happinessState;
  }
};

const buttonDataReducer = (pokemonDataState: any, action: any) => {
  switch (action.type) {
    case "new":
      const newData = action.pokemonData;
      return newData;
    case "feed":
      if (pokemonDataState) {
        const newData = { ...pokemonDataState };
        newData.weight = pokemonDataState.weight + 5;
        return newData;
      }
  }
};

const App = () => {
  const [pokemonData, dispatchData] = useReducer(buttonDataReducer, undefined);
  const [pokemonHappiness, dispatchHappy] = useReducer(
    buttonHappinessReducer,
    0
  );
  return (
    <>
      <pokemonDataContext.Provider value={{ pokemonData, dispatchData }}>
        <pokemonHappinessContext.Provider
          value={{ pokemonHappiness, dispatchHappy }}
        >
          <Routes>
            <Route
              path="/"
              element={<RootPage />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/tamagotchi"
              element={<Tamagotchi />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/pokeform"
              element={<PokeFormPage />}
              errorElement={<ErrorPage />}
            />
          </Routes>
        </pokemonHappinessContext.Provider>
      </pokemonDataContext.Provider>
    </>
  );
};

export default App;
