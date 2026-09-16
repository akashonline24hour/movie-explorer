import { X, Star, Calendar, Film } from "lucide-react";

export default function MovieModal({ show, onClose }) {
  if (!show) return null;

  const title = show.name || "Untitled";
  const rating = show.rating?.average ? show.rating.average.toFixed(1) : "N/A";
  const releaseYear = show.premiered ? show.premiered.substring(0, 4) : "N/A";
  const backdropUrl =
    show.image?.original ||
    show.image?.medium ||
    "https://via.placeholder.com/600x350?text=No+Image";
  const genres = show.genres?.length ? show.genres.join(", ") : "N/A";

  // Clean HTML tags from TVMaze summary string
  const cleanSummary = show.summary
    ? show.summary.replace(/<[^>]*>?/gm, "")
    : "No overview available for this show.";

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Header */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black/90 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Backdrop Image */}
        <div className="h-64 sm:h-80 bg-slate-950 relative overflow-hidden">
          <img
            src={backdropUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        {/* Modal Information Body */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>

          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>Rating: {rating}</span>
            </span>
            <span>|</span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-4 h-4 text-indigo-400" />
              <span>Release: {releaseYear}</span>
            </span>
            <span>|</span>
            <span className="flex items-center space-x-1">
              <Film className="w-4 h-4 text-indigo-400" />
              <span>Genres: {genres}</span>
            </span>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Overview
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {cleanSummary}
            </p>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
