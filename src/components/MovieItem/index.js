import ReactPlayer from "react-player";
import Popup from "reactjs-popup";
import { IoMdClose } from "react-icons/io";
import "reactjs-popup/dist/index.css";

import "./index.css";

const MovieItem = (props) => {
  const { itemDetails} = props;

  const { thumbnailUrl, categoryId, videoUrl } = itemDetails;  

  return (
    <Popup
      modal
      trigger={
        <button type="button" className="card-container">
          <img
            style={{ color: "#ffffff", width: "100%" }}
            src={thumbnailUrl}
            alt={categoryId}
          />
        </button>
      }
      className="popup-content"
    >
      {(close) => (
        <div className="over-container">
          <button
            type="button"
            className="close-button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose size={20} />
          </button>
          <div className="video-container">
            <h1 className="heading">Video Player</h1>
            <div className="responsive-container">
              <ReactPlayer url={videoUrl} controls='true'/>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default MovieItem;
