import MoviesSlider from "../MoviesSlider";
import "./index.css";

const PrimeVideo = (props) => {
  const { moviesList } = props;
  const actionMoviesList = moviesList.filter(
    (eachAction) => eachAction.categoryId === "ACTION"
  );
  const comedyMoviesList = moviesList.filter(
    (eachComedy) => eachComedy.categoryId === "COMEDY"
  );
 //
 //
  return (
    <div className="main-page-container">
      <img
        className="banner"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <h1 className="heading">Action Movies</h1>
      <MoviesSlider itemList={actionMoviesList} />     
      <h1 className="heading">Comedy Movies</h1>  
      <MoviesSlider itemList={comedyMoviesList} />    
    </div>
  );
};

export default PrimeVideo;
