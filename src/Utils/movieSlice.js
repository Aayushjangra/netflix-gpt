import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies : null,
        addTrailerVideo: null,

    },
    reducers : {
        addNowPlayingMovies : (state , action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;

        },
    },
});
export const {addNowPlayingMovies ,   addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;