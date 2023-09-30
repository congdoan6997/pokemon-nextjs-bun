import Pagination from "@/components/Pagination";
import PokemonCard from "@/components/PokemonCard";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-center text-5xl font-bold mt-4 mb-10">Pokemon</h1>
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-blue-600 drop-shadow-lg mb-4">
          Generation:
        </h3>
        <Pagination />
      </div>
      <div className="grid gap-4 md:grid-cols-3 grid-cols-1 items-center justify-center">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  );
}
