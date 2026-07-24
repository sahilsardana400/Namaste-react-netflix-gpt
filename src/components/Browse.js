import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import BrowseTopSection from './BrowseTopSection';
import BrowseSecondSection from './BrowseSecondSection';
import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  const GptSwitch = useSelector((store) => store.gpt.toogleswitch);


  return (
    <div>
      <Header />
      {/* - BrowseTopSection
        - Video top
        - tile & description
      - BrowseSecondSection
        - Moview List * n
          - movie cards * n  */}

        {
          GptSwitch ? <GptSearch />:  
          <>
            <BrowseTopSection />
            <BrowseSecondSection />
          </>
        }

    </div>
  )
}

export default Browse;