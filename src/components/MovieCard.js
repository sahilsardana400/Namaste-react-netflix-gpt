import React from 'react';
import { IMDBIMAGEPATH } from '../utils/constants';

const MovieCard = (props) => {
    const {moviedata} = props;
    const posted = moviedata.poster_path;
    return (
    <div className="w-48 pr-3">
        <img src={`${IMDBIMAGEPATH}${posted}`} className="rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer" alt="Poster" />
    </div>
  )
}

export default MovieCard