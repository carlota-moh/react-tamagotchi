import { Route, Routes } from "react-router-dom";
import RootPage from "./Root";
import ErrorPage from "./ErrorPage";
import Tamagotchi from "./Tamagotchi";
import PokeFormPage from "./Pokeform";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootPage />} errorElement={<ErrorPage />} />
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
    </>
  );
};

export default App;
