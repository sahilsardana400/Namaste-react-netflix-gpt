import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMoviesSuggestion from './GptMoviesSuggestion';
import loginBackground from "../assets/images/login_background.jpg";

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
            <img src={loginBackground} />
        </div>
        <GptSearchBar />
        <GptMoviesSuggestion />
    </div>
  )
}

export default GptSearch