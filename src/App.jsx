import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MovieListingPage from "./pages/MovieListingPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" ? (
        <HomePage onNavigateToMovies={() => setCurrentPage("movies")} />
      ) : (
        <MovieListingPage />
      )}

      <Footer />
    </div>
  );
}
