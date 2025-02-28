import ActiveTab from "@/app/components/ActiveTab";
import { fetchPokemon, fetchPokemonList } from "@/app/lib/fetchPokemon";
import Image from "next/image";

interface PokemonType {
  type: { name: string };
}

/**
 * @returns static pages of each pokemon
 */
export async function generateStaticParams() {
  const result = await fetchPokemonList();
  const staticParams = result.pokemonList.map((_: any, index: number) => ({
    id: (index + 1).toString(),
  }));
  return staticParams;
}

/**
 * Display the detailed view of pokemon selected.
 * @param : Pokemon ID
 * @returns
 */
export default async function Pokemon({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pokemon = await fetchPokemon(id);
  console.log(pokemon);

  const pokemonImage =
    pokemon.sprites.other.dream_world.front_default === null
      ? pokemon.sprites.other.home.front_default
      : pokemon.sprites.other.dream_world.front_default;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-5 bg-gray-300 shadow-xl relative">
      <div className="relative max-w-md min-h-2/3 w-full mx-auto bg-white rounded-xl overflow-hidden text-black">
        <div className="h-80 bg-gradient-to-t from-violet-200 to-violet-400 flex justify-center items-center overflow-hidden">
          <Image
            src={pokemonImage ?? "/NotFound.png"}
            alt={pokemon.name}
            height={180}
            width={180}
            className="mx-auto p-2 bg-transparent object-contain hover:scale-110 transition-all"
          />
        </div>
        <h2 className="text-2xl font-bold capitalize text-center pt-4">
          {pokemon.name}
        </h2>
        <div className="flex gap-2 justify-center items-center text-sm py-2">
          <label className="text-black/50">Type :</label>
          {pokemon.types.map((t: PokemonType) => {
            return (
              <p
                key={t.type.name}
                className="capitalize bg-violet-500/80 text-white rounded-2xl px-3 py-1"
              >
                {t.type.name}
              </p>
            );
          })}
        </div>
        <ActiveTab pokemon={pokemon} />
      </div>
    </div>
  );
}
