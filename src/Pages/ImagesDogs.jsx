import { useEffect, useState } from "react";
import { GetDogImages } from "../API.js/Api";
import Dog from "../Assets/Dog.gif";
import "../Styles/gallery.scss";

const ImagesDogs = () => {
  const [dogImages, setDogImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetDogImages().then((images) => {
      setDogImages(images);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
    <div className="header-container">
        <div>
      <h2>Dog Images</h2>
      <p className="page-text">Refresh for more!</p></div>
    </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-background">
            <img className="loading-gif" src={Dog} alt="loading" />
            <p className="loading-text">Loading...</p>
          </div>
        </div>
      ) : (
        <div className="grid-container">
          {dogImages.map((image, index) => (
            <div>
            <img
              key={index}
              className="gallery-item"
              src={image}
              alt="dog"
            />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ImagesDogs;
