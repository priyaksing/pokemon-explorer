"use client";
import { useEffect, useState } from "react";
import DisplayPokemons from "./DisplayPokemons";
import { fetchPokemonList } from "../lib/fetchPokemon";
import Pagination from "./Pagination";

// Interface for Pokemons List
export interface Pokemons {
  name: string;
  url: string;
}

/**
 * Implemented pagination. Fetched pokemons with limit 140 per page
 * @param : Total list of pokemons, Total number of pokemons
 */
export default function Input({
  pokemonTotalList,
  pokemonCount,
}: {
  pokemonTotalList: Pokemons[];
  pokemonCount: number;
}) {
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pokemonsPerPage, setPokemonsPerPage] = useState([]);
  const limit = 140;
  const totalPages = Math.ceil(pokemonCount / limit);

  /**
   * Filter pokemons based on search filter
   */
  const filteredPokemons =
    input === ""
      ? pokemonTotalList
      : pokemonTotalList.filter((pokemon) => {
          return pokemon.name.toLowerCase().includes(input.toLowerCase());
        });

  /**
   * Fetch pokemons per page
   */
  useEffect(() => {
    fetchPokemonList(page, limit)
      .then((data) => setPokemonsPerPage(data))
      .catch((error) => alert(`Error fetching pokemons: ${error}`));
  }, [page]);

  return (
    <div className="flex flex-col justify-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for pokemons.."
        className="bg-[#F4F4F6] rounded-3xl text-gray-500 px-5 py-3 w-2/3 mx-auto my-4 focus:outline-none"
      />
      {input ? (
        <DisplayPokemons pokemons={filteredPokemons} />
      ) : (
        <>
          <DisplayPokemons pokemons={pokemonsPerPage} />
          <div className="w-full flex flex-wrap justify-center pt-8 px-10">
            <Pagination totalPages={totalPages} setPage={setPage} />
          </div>
        </>
      )}
    </div>
  );
}
