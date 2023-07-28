import { useEffect, useState } from "react";
import { GetCatImages } from "../API.js/Api";
import Cat from "../Assets/Cat.gif";
import "../Styles/gallery.scss";

const ImagesCats = () => {
  const [catImages, setCatImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetCatImages().then((images) => {
      setCatImages(images);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
    <div className="header-container">
        <div>
      <h2>Cat Images</h2>
      <p className="page-text">Refresh for more!</p></div>
    </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-background">
            <img className="loading-gif" src={Cat} alt="loading" />
            <p className="loading-text">Loading...</p>
          </div>
        </div>
      ) : (
        <div className="grid-container">
          {catImages.map((image, index) => (
            <div>
            <img
              key={index}
              className="gallery-item"
              src={image}
              alt="cat"
            />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ImagesCats;
