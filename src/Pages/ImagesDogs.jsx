import Dog from "../Assets/Dog.gif";
import useFetchImages from "../Hooks/useFetchImages";
import "../Styles/gallery.scss";

const ImagesDogs = () => {
  
  const {images, isLoading} = useFetchImages("https://api.thedogapi.com/v1/");

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
        {images.map((image, index) => (
          <div key={index}>
            <img
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
