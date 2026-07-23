import React from 'react';
import { useEffect,useState } from "react";
import { IMDBAPITOKEN,IMDBAPIVIDEOS } from '../utils/constants';
import { addTrailorVideo } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';


//hook is just a normal javascript function
//fetch videos for the movieid and also update the trailor of movie in redux store
const useMovieTrailor = (movieId) => {
    const dispatch = useDispatch();
    //const [movieVideos,setMovieVideos] = useState(null);
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', Authorization: `Bearer ${IMDBAPITOKEN}`}
    };

    useEffect(() => {
        getMovieVideos();
    },[]);

    const getMovieVideos = async () => {
        const apiUrl = IMDBAPIVIDEOS.replace("{movie_id}", movieId);
        const response = await fetch(apiUrl,options);
        if (!response.ok) {
            throw new Error(
                `Failed to fetch popular movies. Status: ${response.status}`
            );
        }
        const fetchedJson = await response.json();
        const FilterdVideos = fetchedJson.results.filter((movie) => {
            return movie.type === 'Trailer'
        });
        const movieTrailor =(FilterdVideos.length > 0)? FilterdVideos?.[0]:fetchedJson.results[0];
        //const videoKey = movieTrailor.key;
        dispatch(addTrailorVideo(movieTrailor));//dispatch action for trailor video key in store
        //setMovieVideos(fetchedJson.results);
    };
    //return movieVideos;
}

export default useMovieTrailor;