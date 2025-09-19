"use server";

import { api } from "@/libs/xior";

interface Params {
  id: string;
}

const revalidate = 86400 * 7 * 4; // 1 month in seconds

export const getPokemon = async ({ id }: Params) => {
  return await api
    .get<any>(`/pokemon/${id}`, { next: { revalidate }, cache: "force-cache" })
    .then((res) => res.data);
};
