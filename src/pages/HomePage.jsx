import HeroBanner from "../components/HeroBanner";

export default function HomePage({ onNavigateToMovies }) {
  return (
    <main className="flex-1">
      <HeroBanner onExploreClick={onNavigateToMovies} />
    </main>
  );
}
