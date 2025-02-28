export interface PokemonAbility {
  ability: { name: string; url: string };
  is_hidden: boolean;
}

export default function AbilitiesTab({
  abilities,
}: {
  abilities: PokemonAbility[];
}) {
  return (
    <div className="pb-4">
      {abilities.length === 0 && (
        <p className="text-center text-black/60 pt-5">Not Found</p>
      )}
      {abilities.map((a) => {
        return (
          <div key={a.ability.name}>
            <div className="flex justify-start gap-4 items-center py-2 pl-2">
              <p className="text-black/90 capitalize font-semibold tracking-tight leading-7">
                {a.ability.name.split("-").join(" ")}
              </p>
              {a.is_hidden && (
                <p className="border rounded-xl text-xs tracking-tight text-center text-black/60 font-semibold px-3">
                  Hidden
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
