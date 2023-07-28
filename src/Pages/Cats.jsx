import { getCatBreeds } from "../API.js/Api";
import AnimalCard from "../Components/AnimalCard";
import "../Styles/main.scss";
import { useEffect, useState } from "react";
import Cat from "../Assets/Cat.gif";

const Cats = () => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCatBreeds().then((breeds) => {
      const breedInfos = breeds.map((breed) => breed);
      setBreeds(breedInfos);
      setIsLoading(false);
    });
  }, []);

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
