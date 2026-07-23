import React from 'react'
import MovieCard from './MovieCard';

const MoviesList = (props) => {
  const {title,movies} = props;
   return (
    <div className="p-6">
        <h1 className="text-white text-3xl font-bold mb-4 px-4 py-2 w-fit">
                {title}
        </h1>

        <div className="flex py-6 overflow-x-scroll hide-scrollbar">
            <div className="flex">
                {
                    movies?.map((movie) => {
                        return <MovieCard
                            key={movie.id}
                            moviedata={movie}
                        />
                    })
                }
            </div>
        </div>
    </div>
  );
}

export default MoviesList