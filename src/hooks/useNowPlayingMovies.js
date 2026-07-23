import { PopularMoviesListApi,IMDBAPITOKEN } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies,removePlayingMovies } from "../utils/moviesSlice";

//hook is a normal javascript function
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', Authorization: `Bearer ${IMDBAPITOKEN}`}
    };

    useEffect(() => {
        getNowPlayingMovies();
    },[]);

    const getNowPlayingMovies = async () => {
        try {
            const response = await fetch(PopularMoviesListApi,options);
            if (!response.ok) {
                throw new Error(
                    `Failed to fetch popular movies. Status: ${response.status}`
                );
            }
            const fetchedJson = await response.json();
            //disptach action: in movieSlice to nowPlaying store data
            dispatch(addNowPlayingMovies(fetchedJson.results));
        }
        catch(error) {
            console.error("Error fetching popular movies:", error);
            //throw error;
        }
    };
};  


export default useNowPlayingMovies;