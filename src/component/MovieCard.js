import { IMG_CDN_URL } from "../Utils/constant";


const MovieCard = ({PosterPath}) => {
  return (
  <div className="w-48 pr-4">
    <img alt="Movie Card" src={IMG_CDN_URL+ PosterPath}/>
     </div>
  );
};

export default MovieCard;
