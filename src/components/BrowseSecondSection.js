import React from 'react'
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';

const BrowseSecondSection = () => {

  {/*- Movies list (Popular)
    - Movie Card * N
  - Movies list (NowPlaying)
    - Movie Card * N
  - Movies list (Horror)
    - Movie Card * N
  - Movies list (cartoon)
    - Movie Card * N */}
  
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  console.log(popularMovies);
  
  //if(!nowPlayingMovies) return;
  return (
    <div className="bg-black">
      <div className="-mt-48 z-20 relative pl-5">
        <MoviesList title={"Now Playing"} movies={nowPlayingMovies} />
        <MoviesList title={"Popular"} movies={popularMovies} />
        <MoviesList title={"Animated"} movies={nowPlayingMovies} />
        <MoviesList title={"Comedy"} movies={nowPlayingMovies} />
        <MoviesList title={"Entertainment"} movies={nowPlayingMovies} />
        <MoviesList title={"Adventure"} movies={nowPlayingMovies} />
        <MoviesList title={"Family Time"} movies={nowPlayingMovies} />
      </div>
    </div>
  )
}

export default BrowseSecondSection;