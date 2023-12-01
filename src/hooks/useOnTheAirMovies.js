import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import {  addOnTheAirMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const  useOnTheAirMovies = () => {
    const dispatch = useDispatch();

const getOnTheAirMovies = async () => {
  const data = await fetch ("https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
    API_OPTIONS
  );
  const json = await data.json();
    dispatch(addOnTheAirMovies(json.results));
  };

useEffect(() => {
    getOnTheAirMovies ();
}, []);
};

export default useOnTheAirMovies;