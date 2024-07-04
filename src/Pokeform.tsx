import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { pokemonDataContext, pokemonHappinessContext } from "./App";
import { fetchPokemon } from "./components/areas/functions";
import { TextField, Button, Stack } from "@mui/material";

type PokeFormInput = {
  pokemonName: string;
};

const PokeFormPage = () => {
  const form = useForm<PokeFormInput>({
    defaultValues: {
      pokemonName: "",
    },
  });

  const { pokemonData, dispatchData } = useContext(pokemonDataContext);
  const { pokemonHappiness, dispatchHappy } = useContext(
    pokemonHappinessContext
  );

  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

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
    <>
      <div className="tamagotchi form-box">
        <div className="screen">
          <h1 className="welcome-message">Request a custom Pokémon</h1>
        </div>
        <div className="button-ares">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack width={400}>
              <TextField
                sx={{ width: 0.7, mx: 5, my: 4}}
                className="form-input"
                label="Pokemon Name"
                type="pokemonName"
                {...register("pokemonName", {
                  required: "Pokémon name is required",
                })}
                error={!!errors.pokemonName}
                helperText={errors.pokemonName?.message}
              />
              <Button
                type="submit"
                sx={{ width: 0.7, mx: 5 }}
                variant="contained"
                color="secondary"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
};

export default PokeFormPage;
