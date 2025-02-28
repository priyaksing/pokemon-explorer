import Image from "next/image";
import Link from "next/link";
import { Pokemons } from "./Input";

/**
 * Display the pokemons on homepage - Name and Image
 * @param : Pokemons per page OR Filtered pokemons based on search
 * @returns
 */
export default function DisplayPokemons({
  pokemons,
}: {
  pokemons: Pokemons[];
}) {
  return (
    <div className="bg-[#F4F4F5] rounded-2xl shadow">
      {pokemons.length === 0 && (
        <p className="text-black/80 text-center py-5">No Pokemons Found</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center py-10">
        {pokemons.map((pokemon: Pokemons, index: number) => {
          const id = pokemon.url.split("/").at(-2);
          return (
            <Link key={id} href={`/pokemon/${id}`}>
              <div
                key={id}
                className="image-size image-bg overflow-hidden flex flex-col justify-between items-center gap-4 p-5 rounded-2xl shadow-lg"
              >
                <p className="capitalize font-semibold text-center">
                  {pokemon.name}
                </p>
                <Image
                  key={id}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
                  alt={pokemon.name}
                  height={120}
                  width={120}
                  className="max-w-20 max-h-20 lg:max-w-32 lg:max-h-32 mb-4 object-contain hover:scale-125 transition-all"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
