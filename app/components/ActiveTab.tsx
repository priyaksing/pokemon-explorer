"use client";
import { useState } from "react";
import AbilitiesTab, { PokemonAbility } from "./AbilitiesTab";
import StatsTab, { PokemonStat } from "./StatsTab";
import MovesTab, { PokemonMoves } from "./MovesTab";

interface Pokemon {
  abilities: PokemonAbility[];
  moves: PokemonMoves[];
  stats: PokemonStat[];
}

/**
 * Render the details based on what you select from - Abilities, Stats and Moves
 * @returns
 */
export default function ActiveTab({ pokemon }: { pokemon: Pokemon }) {
  const [activeTab, setActiveTab] = useState("abilities");
  const tabs = ["abilities", "stats", "moves"];

  return (
    <>
      <div className="flex justify-center items-center p-3 pb-5">
        <div className="grid grid-cols-3 rounded bg-gray-200 p-1 w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-1 mx-1 capitalize ${
                activeTab === tab ? "bg-white rounded shadow" : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="relative px-4 pt-4 h-48 overflow-y-scroll scrollbar-hide transition-all duration-500">
        {activeTab === "abilities" && (
          <AbilitiesTab abilities={pokemon.abilities} />
        )}
        {activeTab === "stats" && <StatsTab stats={pokemon.stats} />}
        {activeTab === "moves" && <MovesTab moves={pokemon.moves} />}
        <div className="sticky bottom-0 left-0 h-6 w-full bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </>
  );
}
