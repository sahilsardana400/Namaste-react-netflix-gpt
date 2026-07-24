import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -800,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 800,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-6 py-4">
      <h1 className="mb-4 w-fit px-2 text-3xl font-bold text-white">
        {title}
      </h1>

      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/60 p-4 text-white transition hover:bg-black group-hover:block"
        >
          ⬅
        </button>
        
        {/* Movies */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
        >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              moviedata={movie}
            />
          ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/60 p-4 text-white transition hover:bg-black group-hover:block"
        >
          ➡
        </button>
      </div>
    </div>
  );
};

export default MoviesList;