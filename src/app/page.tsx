import { getPokemons } from "@/services/get-pokemons";
import { Content } from "./content";

export default async function Home() {
  const pokemons = await getPokemons({});

  return <Content pokemons={pokemons.results} />;
}
