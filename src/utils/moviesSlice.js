import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        trailorVideo:null
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        removePlayingMovies: (state,action) => {
            state.nowPlayingMovies = null;
        },
        addTrailorVideo: (state,action) => {
            state.trailorVideo = action.payload;
        },
    }
});

export const {addNowPlayingMovies,removePlayingMovies,addTrailorVideo} = moviesSlice.actions;
export default moviesSlice.reducer;