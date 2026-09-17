import { Link, useLocation } from "react-router-dom";
import { Film } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-slate-100 hover:text-indigo-400 transition"
        >
          <Film className="w-6 h-6 text-indigo-400" />
          <span className="font-bold text-lg tracking-wide">MovieExplorer</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              location.pathname === "/"
                ? "bg-indigo-600 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              location.pathname === "/movies"
                ? "bg-indigo-600 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
}
