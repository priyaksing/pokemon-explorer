import { fetchPokemonList } from "./lib/fetchPokemon";
import Input from "./components/Input";

/**
 *
 * Fetch total list of pokemons to enable efficient search
 */
export default async function Home() {
  const result = await fetchPokemonList();
  return (
    <div className="flex flex-col justify-start px-20 sm:px-10 md:px-20 xl:px-20 pt-52 pb-32 min-h-screen bg-fixed bg-[url('/background.png')]">
      <h1 className="text-center text-4xl font-bold pb-10 text-white">
        Pokemon Explorer
      </h1>
      <Input
        pokemonTotalList={result?.pokemonList}
        pokemonCount={result?.pokemonCount}
      />
    </div>
  );
}
