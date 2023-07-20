import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { pokemonDataContext, pokemonHappinessContext } from "./App";
import { fetchPokemon } from "./components/areas/functions";


interface PokeFormInput {
  pokemonName: string;
}

const PokeFormPage = () => {
  const { register, handleSubmit } = useForm<PokeFormInput>();
  const { pokemonData, dispatchData } = useContext(pokemonDataContext);
  const { pokemonHappiness, dispatchHappy } = useContext(
    pokemonHappinessContext
  );

  const onSubmit: SubmitHandler<PokeFormInput> = async (data) => {
    dispatchHappy({ type: "new" });
    const pokemonData = await fetchPokemon(data.pokemonName).catch(
      (e) => alert("Invalid pokemon")
    );
    dispatchData({ type: "new", pokemonData: pokemonData });
    console.log(pokemonData);
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
