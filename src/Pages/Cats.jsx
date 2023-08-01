import AnimalCard from "../Components/AnimalCard";
import "../Styles/main.scss";
import Cat from "../Assets/Cat.gif";
import useFetchBreeds from "../Hooks/useFetchBreeds";

const Cats = () => {

  const {breeds, isLoading} = useFetchBreeds("https://api.thecatapi.com/v1/");

  return (
    <>
      <div className="header-container">
        <div>
      <h2>All Cat Breeds</h2>
      <p className="page-text">Click on the image to find out more about that breed.</p></div>
    </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-background">
          <img className="loading-gif" src={Cat} alt="loading" />
          <p className="loading-text">Loading...</p>
          </div>
        </div>
      ) : (
       
          <ul className="breeds-list">
            <AnimalCard breeds={breeds} animal={"cat"}/>
          </ul>
        
      )}
    </>
  );
};

export default Cats;
