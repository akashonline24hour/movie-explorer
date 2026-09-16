export default function HeroBanner({ onExploreClick }) {
  return (
    <section className="relative bg-slate-900 text-white py-24 sm:py-32 px-4 overflow-hidden border-b border-slate-800">
      {/* Background Gradient Decorative Overlay */}
      <div className="absolute inset-0 bg-linear-to-tr from-indigo-900/40 via-slate-900 to-slate-900 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
          DISCOVER MOVIES
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Explore and discover your favorite movies and TV shows from around the
          world.
        </p>
        <div className="pt-4">
          <button
            onClick={onExploreClick}
            className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-indigo-500/25 transition duration-200 cursor-pointer"
          >
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}
