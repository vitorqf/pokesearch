"use server";

import { api } from "@/libs/xior";

interface Params {
  limit?: number;
  offset?: number;
}

interface ApiResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonSimple[];
}

interface HandledApiResponse {
  count: number;
  next?: string;
  previous?: string;
  results: HandledPokemon[];
}

const revalidate = 86400 * 7 * 4; // 1 month in seconds

export const getPokemons = async ({
  limit = 10000,
  offset = 0,
}: Params): Promise<HandledApiResponse> => {
  const response = await api
    .get<ApiResponse>("/pokemon", {
      params: { limit, offset },
      next: { revalidate },
      cache: "force-cache",
    })
    .then((res) => res.data);

  const images = response.results.map((pokemon) => {
    const id = Number(pokemon.url.split("/").slice(-2, -1)[0]).toString();

    const paddedId = id.padStart(3, "0");

    return {
      redirectTo: Number(id),
      id: paddedId,
      image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`,
      name: pokemon.name,
    };
  });

  return {
    count: response.count,
    next: response.next,
    previous: response.previous,
    results: images,
  };
};
