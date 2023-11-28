import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies &&(
    <div className=" bg-black ">
      <div className="-mt-52 pl-12 relative z-20">
      <MovieList title={"Now Playing "} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending "} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular "} movies={movies.PopularMovies} />
      <MovieList title={"Top Rated "} movies={movies.TopRatedMovies} />
      <MovieList title={"Romantic"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Anime"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
    )
  );
};

export default SecondaryContainer;
