import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import BrowseTopSection from './BrowseTopSection';
import BrowseSecondSection from './BrowseSecondSection';
import usePopularMovies from '../hooks/usePopularMovies';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {/* - BrowseTopSection
        - Video top
        - tile & description
      - BrowseSecondSection
        - Moview List * n
          - movie cards * n  */}
        <BrowseTopSection />
        <BrowseSecondSection />

    </div>
  )
}

export default Browse;