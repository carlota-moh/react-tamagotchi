import { parsePokemon } from "../../src/components/areas/functions";
import data from "./data.json";

describe("API behavior", () => {
  it("Returns a formatted pokemon", () => {
    const pokemonData = parsePokemon(data);

    expect(pokemonData).toEqual({
      name: "ditto",
      types: [
        {
          slot: 1,
          type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        },
      ],
      weight: 40,
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    });
  });
});
