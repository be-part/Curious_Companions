import AnimalCard from "../Components/AnimalCard";
import "../Styles/main.scss";
import Dog from "../Assets/Dog.gif"
import useFetchBreeds from "../Hooks/useFetchBreeds";

const Dogs = () => {

  const {breeds, isLoading} = useFetchBreeds("https://api.thedogapi.com/v1/");

  return (
    <>
    <div className="header-container">
        <div>
      <h2>All Dog Breeds</h2>
      <p className="page-text">Click on the image to find out more about that breed.</p></div>
    </div>

    {isLoading ? (
      <div className="loading-container">
        <div className="loading-background">
        <img className="loading-gif" src={Dog} alt="loading" />
        <p className="loading-text">Loading...</p>
        </div>
      </div>
    ) : (
     
        <ul className="breeds-list">
          <AnimalCard breeds={breeds} animal={"dog"}/>
        </ul>
      
    )}
  </>
  );
};

export default Dogs;
