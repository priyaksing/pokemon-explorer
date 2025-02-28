import { useState } from "react";
import DownIcon from "../ui/DownIcon";
import UpIcon from "../ui/UpIcon";

export interface PokemonMoves {
  move: { name: string };
}

export default function MovesTab({ moves }: { moves: PokemonMoves[] }) {
  const [view, setView] = useState(false);
  moves = view ? moves : moves.slice(0, 10);
  return (
    <div>
      {moves.length === 0 ? (
        <p className="text-center text-black/60 pt-5">Not Found</p>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-3 py-4">
          {moves.map((m) => {
            return (
              <div key={m.move.name} className="w-fit">
                <p className="text-black bg-black/20 rounded-2xl px-2 py-1 text-sm capitalize">
                  {m.move.name.split("-").join(" ")}
                </p>
              </div>
            );
          })}
          <div className="w-full">
            <button
              onClick={() => setView(!view)}
              className="block w-fit mx-auto font-semibold text-sm text-violet-400 hover:text-violet-600"
            >
              {view ? (
                <div className="flex gap-1 items-center">
                  <p>Show Less</p>
                  <UpIcon />
                </div>
              ) : (
                <div className="flex gap-1 items-center">
                  <p>View More</p>
                  <DownIcon />
                </div>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
