
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpComingrMovies from "../hooks/useUpComingMovies";
import useOnTheAirMovies from "../hooks/useOnTheAirMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";




const Browse = () => {
  const ShowGptSearch = useSelector((store) => store.gpt.showGptSearch);
 
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpComingrMovies();
useOnTheAirMovies();

return (
  <div>
    <Header />
    {ShowGptSearch ? (
      <GptSearch />
    ) : (
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    )}
  </div>
);
};
export default Browse;

