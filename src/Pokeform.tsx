import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { pokemonDataContext, pokemonHappinessContext } from "./App";
import { fetchPokemon } from "./components/areas/functions";
import { Alert } from "@mui/material";

interface PokeFormInput {
  pokemonName: string;
}

const PokeFormPage = () => {
  const { register, handleSubmit } = useForm<PokeFormInput>();
  const { pokemonData, dispatchData } = useContext(pokemonDataContext);
  const { pokemonHappiness, dispatchHappy } = useContext(
    pokemonHappinessContext
  );

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<PokeFormInput> = (data) => {
    dispatchHappy({ type: "new" });
    fetchPokemon(data.pokemonName)
      .then((pokemonData) => {
        return dispatchData({ type: "new", pokemonData: pokemonData });
      })
      .then(() => navigate("/tamagotchi"))
      .catch((e) => {
        alert("Invalid pokemon");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Pokémon name:
        <input
          {...register("pokemonName", {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PokeFormPage;
