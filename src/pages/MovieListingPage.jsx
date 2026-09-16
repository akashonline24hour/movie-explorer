import { useState, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

export default function MovieListingPage() {
  const [shows, setShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);

  // Fetch initial popular shows
  useEffect(() => {
    fetchInitialShows();
  }, []);

  const fetchInitialShows = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();
      setShows(data.slice(0, 24)); // Display first 24 items
    } catch (error) {
      console.error("Error fetching shows:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);

    if (!query.trim()) {
      fetchInitialShows();
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`,
      );
      const data = await response.json();
      // Search endpoint returns array of { score, show: {...} }
      const formattedShows = data.map((item) => item.show);
      setShows(formattedShows);
    } catch (error) {
      console.error("Error searching shows:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Search Input Bar */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search for a movie or show title..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
          />
        </div>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center py-20 text-indigo-400">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
      ) : (
        /* Responsive Card Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shows.map((show) => (
            <MovieCard key={show.id} show={show} onSelect={setSelectedShow} />
          ))}
        </div>
      )}

      {/* Empty Search Result State */}
      {!loading && shows.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          <p className="text-lg">
            No movies or shows found matching your search.
          </p>
        </div>
      )}

      {/* Detailed View Modal */}
      {selectedShow && (
        <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </main>
  );
}
