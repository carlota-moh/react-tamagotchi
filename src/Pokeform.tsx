import { SubmitHandler, useForm } from "react-hook-form";

interface PokeFormInput {
  pokemonName: string;
}

const PokeFormPage = () => {
  const { register, handleSubmit } = useForm<PokeFormInput>();

  const onSubmit: SubmitHandler<PokeFormInput> = (data) => {
    alert(JSON.stringify(data));
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
