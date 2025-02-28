export interface PokemonStat {
  base_stat: number;
  stat: { name: string };
}

export default function StatsTab({ stats }: { stats: PokemonStat[] }) {
  return (
    <div className="pb-4">
      {stats.length === 0 && (
        <p className="text-center text-black/60 pt-5">Not Found</p>
      )}
      {stats.map((s: PokemonStat) => {
        return (
          <div key={s.stat.name} className="py-2.5 px-2">
            <div className="flex justify-between tracking-tight text-sm pb-1.5">
              <p className="capitalize">{s.stat.name}</p>
              <p className="pr-2">{s.base_stat}</p>
            </div>
            <div className="w-full h-2.5 bg-gray-300 rounded-full">
              <div
                className="h-2.5 bg-black/80 rounded-full"
                style={{ width: `${(s.base_stat / 255) * 100}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
