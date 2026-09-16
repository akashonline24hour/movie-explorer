import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 p-8 text-center text-slate-400">
        Current active page:{" "}
        <span className="text-indigo-400 font-semibold">{currentPage}</span>
      </main>
      <Footer />
    </div>
  );
}
