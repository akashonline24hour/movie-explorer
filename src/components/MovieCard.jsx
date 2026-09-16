import { Star, Calendar } from "lucide-react";

export default function MovieCard({ show, onSelect }) {
  const title = show.name || "Untitled";
  const rating = show.rating?.average ? show.rating.average.toFixed(1) : "N/A";
  const releaseYear = show.premiered ? show.premiered.substring(0, 4) : "N/A";
  const posterUrl =
    show.image?.medium || "https://via.placeholder.com/210x295?text=No+Image";

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-200 flex flex-col justify-between border border-slate-800">
      <div className="aspect-2/3 bg-slate-950 overflow-hidden relative">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-white line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center space-x-4 text-sm text-slate-400 mt-2">
            <span className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>{rating}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{releaseYear}</span>
            </span>
          </div>
        </div>

        <button
          onClick={() => onSelect(show)}
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition cursor-pointer"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
