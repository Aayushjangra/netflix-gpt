import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../Utils/constant";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-fullscreen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;

