import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import {   addUpComingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const  useUpComingrMovies = () => {
    const dispatch = useDispatch();

const getUpComingMovies = async () => {
  const data = await fetch ("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    API_OPTIONS
  );
  const json = await data.json();
    dispatch( addUpComingMovies(json.results));
  };

useEffect(() => {
  getUpComingMovies();
}, []);
};

export default   useUpComingrMovies;