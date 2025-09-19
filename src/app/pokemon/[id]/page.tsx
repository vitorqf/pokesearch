import { Cry } from "@/components/cry";
import { InfoBox } from "@/components/info-box";
import { MainImage } from "@/components/main-image";
import { Stat } from "@/components/stat";
import { Type } from "@/components/type";
import { getPokemon } from "@/services/get-pokemon";
import { getPokemons } from "@/services/get-pokemons";
import capitalize from "capitalize";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<{
  title: string;
  description: string;
}> {
  const { id } = await params;
  const pokemon = await getPokemon({ id });
  return {
    title: `PokéSearch - ${capitalize(pokemon.name)}`,
    description: `View detailed information about ${capitalize(pokemon.name)}, including its stats, types, and cry.`,
  };
}

export async function generateStaticParams() {
  const pokemon = await getPokemons({});
  return pokemon.results.map((pokemon) => ({
    id: pokemon.redirectTo.toString(),
  }));
}

export default async function PokemonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pokemon = await getPokemon({ id });

  const paddedId = id.padStart(3, "0");
  const mainImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
  const fallback = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${paddedId}.png`;

  return (
    <main className="py-10">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/*Left Panel*/}
        <div className="flex-1 h-screen max-h-[83vh] lg:sticky top-[113px] flex flex-col gap-4 items-center justify-center">
          {/*Main Image*/}
          <MainImage src={mainImage} fallback={fallback} alt={pokemon.name} />

          {/*Sprites*/}
          <div className="flex-1 flex gap-4 w-full items-center">
            {/*Front Sprite*/}
            <div className="group flex flex-1 rounded-lg flex-col h-full bg-slate-200 items-center justify-center">
              <img
                width={150}
                height={150}
                className="group-hover:scale-125 transition duration-150"
                src={
                  pokemon.sprites.front_default ??
                  "https://placehold.co/150x150/f87171/ffffff?text=?"
                }
                alt={pokemon.name}
              />
            </div>

            {/*Back Sprite*/}
            <div className="group flex-1 flex rounded-lg flex-col h-full bg-slate-200 items-center justify-center">
              <img
                width={150}
                height={150}
                className="group-hover:scale-125 transition duration-150"
                src={
                  pokemon.sprites.back_default ??
                  "https://placehold.co/150x150/f87171/ffffff?text=?"
                }
                alt={pokemon.name}
              />
            </div>
          </div>
        </div>

        {/*Right Panel*/}
        <div className="flex-1 space-y-8">
          {/*Name + Cry + ID*/}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-3xl capitalize font-semibold">
                {pokemon.name}
              </p>
              <Cry src={pokemon?.cries?.latest} />
            </div>

            <p className="text-xl text-slate-500">#{paddedId}</p>
          </div>

          {/*Types*/}
          <div className="flex items-center gap-3">
            {pokemon.types.map((type: any) => (
              <Type key={type.slot} label={type.type.name} />
            ))}
          </div>

          {/*Base Info*/}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Base Info</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 border border-slate-200 p-4 rounded-lg">
              <InfoBox label="Weight" value={`${pokemon.weight / 10} kg`} />
              <InfoBox label="Height" value={`${pokemon.height / 10} m`} />
              <InfoBox label="Base Exp." value={pokemon.base_experience} />
            </div>
          </div>

          {/*Base Stats*/}
          <div>
            <h1 className="text-2xl font-semibold mb-6">Base Stats</h1>

            <div className="space-y-3">
              {pokemon.stats.map((stat: any) => (
                <Stat
                  key={stat.stat.name}
                  label={stat.stat.name}
                  value={stat.base_stat}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
