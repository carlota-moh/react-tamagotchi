import { rest } from "msw";
import data from "./data.json";
import { Pokemon } from "pokedex-promise-v2";

export interface PokemonResponseBody {
  data: Pokemon;
}

export const handlers = [
  // Handles a GET request
  rest.get<PokemonResponseBody>("https://pokeapi.co/api/v2/pokemon/:id", async (req, res, ctx) => {
    return res(ctx.json(data));
  }),
];
