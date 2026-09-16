import { Film } from "lucide-react";

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => setCurrentPage("home")}
          className="flex items-center space-x-2 text-xl font-bold text-indigo-400 hover:text-indigo-300 transition"
        >
          <Film className="w-7 h-7" />
          <span>MovieExplorer</span>
        </button>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentPage("home")}
            className={`px-3 py-2 rounded-md text-sm font-medium transition ${
              currentPage === "home"
                ? "text-indigo-400 font-semibold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage("movies")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              currentPage === "movies"
                ? "bg-indigo-600 text-white hover:bg-indigo-500"
                : "bg-slate-800 text-slate-200 hover:bg-slate-700"
            }`}
          >
            Movies
          </button>
        </div>
      </div>
    </nav>
  );
}
