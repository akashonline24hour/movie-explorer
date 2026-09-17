import { useNavigate } from "react-router-dom";
import { Play, Sparkles } from "lucide-react";

export default function HeroBanner() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Discover Millions of Shows</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
          Your Next Favorite Show is Just a{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
            Click Away
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Explore trending television series, query complete show details via
          the TVMaze API, check cast lists, and filter through high-rated
          entertainment.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate("/movies")}
            className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3.5 rounded-xl transition duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 transform hover:-translate-y-0.5"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Explore Shows Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
