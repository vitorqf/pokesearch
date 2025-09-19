"use server";

import { api } from "@/libs/xior";

interface Params {
  limit?: number;
  offset?: number;
}

interface Response {
  count: number;
  next?: string;
  previous?: string;
  results: any;
}

const revalidate = 86400 * 7 * 4; // 1 month in seconds

export const getPokemons = async ({ limit = 50, offset = 0 }: Params) => {
  const response = await api
    .get<Response>("/pokemon-species", {
      params: { limit, offset },
      next: { revalidate },
      cache: "force-cache",
    })
    .then((res) => res.data);

  const images = response.results.map((pokemon: any) => {
    const id = Number(pokemon.url.split("/").slice(-2, -1)[0]).toString();

    const paddedId = id.padStart(3, "0");

    return {
      redirectTo: id,
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
