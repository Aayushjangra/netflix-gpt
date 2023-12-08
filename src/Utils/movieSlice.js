import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies : null,
        trailerVideo: null,
        popularMovies:null,
        topRatedMovies:null,
        OnTheAirMovies:null,
        UpComingMovies:null,

    },
    reducers : {
        addNowPlayingMovies : (state , action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state , action) => {
            state.PopularMovies = action.payload;
          },
        addTopRatedMovies : (state , action) => {
            state.TopRatedMovies = action.payload;
        },
        addUpComingMovies : (state , action) => {
            state.UpComingMovies = action.payload;
        },
        addOnTheAirMovies : (state , action) => {
            state.OnTheAirMovies = action.payload;
        },
       
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;

        },
    },
});
export const {addNowPlayingMovies ,   addTrailerVideo , addPopularMovies, addTopRatedMovies , addUpComingMovies , addOnTheAirMovies} = movieSlice.actions;

export default movieSlice.reducer;