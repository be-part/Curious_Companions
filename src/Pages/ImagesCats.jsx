import Cat from "../Assets/Cat.gif";
import "../Styles/gallery.scss";
import useFetchImages from "../Hooks/useFetchImages";

const ImagesCats = () => {

  const {images, isLoading} = useFetchImages("https://api.thecatapi.com/v1/");

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
        {images.map((image, index) => (
          <div key={index}>
            <img
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
