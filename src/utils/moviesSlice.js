import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        trailorVideo:null,
        popularMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailorVideo: (state,action) => {
            state.trailorVideo = action.payload;
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload;
        },
    }
});

export const {addNowPlayingMovies,addTrailorVideo,addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;