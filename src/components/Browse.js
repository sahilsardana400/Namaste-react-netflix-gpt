import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import BrowseTopSection from './BrowseTopSection';
import BrowseSecondSection from './BrowseSecondSection';


const Browse = () => {
  useNowPlayingMovies();
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