import { useDispatch ,useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import {  addOnTheAirMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const  useOnTheAirMovies = () => {
    const dispatch = useDispatch();

   const onTheAirMovies = useSelector(
    (store) => store.movies.onTheAirMovies
  );

const getOnTheAirMovies = async () => {
  const data = await fetch ("https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
    API_OPTIONS
  );
  const json = await data.json();
    dispatch(addOnTheAirMovies(json.results));
  };

useEffect(() => {
  !onTheAirMovies && getOnTheAirMovies();
    getOnTheAirMovies ();
}, []);
};

export default useOnTheAirMovies;