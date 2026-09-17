import { Film } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 text-slate-400 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center space-x-2 text-slate-100">
          <Film className="w-5 h-5 text-indigo-400" />
          <span className="font-bold tracking-wide">MovieExplorer</span>
        </div>

        {/* Copyright & API Credit */}
        <div className="text-center sm:text-right text-xs text-slate-500">
          <p>© 2026 MovieExplorer. All rights reserved.</p>
          <p className="mt-0.5">Data provided by TVMaze API</p>
        </div>
      </div>
    </footer>
  );
}
