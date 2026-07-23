import React from 'react';
import useMovieTrailor from '../hooks/useMovieTrailor';
import { useSelector } from 'react-redux';

const VideoBackground = (props) => {
    const {movieId} = props;
    //call the hook to fetch the videos related to the movie id
    useMovieTrailor(movieId);
    const trailorVideo = useSelector((store) => store.movies.trailorVideo );
  
    if (!trailorVideo) {
        return (
            <div className="flex items-center justify-center h-screen bg-black text-white">
            Loading trailer...
            </div>
        );
    }
    return (trailorVideo && <div className="">
        <iframe
            className="w-screen aspect-video"
            src={`https://www.youtube.com/embed/${trailorVideo.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1`}
            title="Movie Trailer"
            allow="autoplay; encrypted-media"
            allowFullScreen
            />
    </div>)
}

export default VideoBackground;