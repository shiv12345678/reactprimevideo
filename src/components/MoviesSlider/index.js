
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieItem from "../MovieItem";
import "./index.css";

const MoviesSlider = props =>{
    const { itemList } = props;
    const settings = {
      dots: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    return (
      <div className="slider-container">
        <Slider {...settings}>
          {itemList.map((eachValue) => (
            <MovieItem
              key={eachValue.id}
              itemDetails={eachValue}
              
            />
          ))}
        </Slider>
      </div>
    );
}

export default MoviesSlider;
