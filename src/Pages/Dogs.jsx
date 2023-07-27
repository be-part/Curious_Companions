import { getDogBreeds } from "../API.js/Api";
import AnimalCard from "../Components/AnimalCard";
import "../Styles/main.scss";
import { useEffect, useState } from "react";
import Dog from "../Assets/Dog.gif"

const Dogs = () => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDogBreeds().then((breeds) => {
      const breedInfos = breeds.map((breed) => breed);
      setBreeds(breedInfos);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
    <div className="header-container">
      <h2>Dog Breeds</h2>
      {/* <FilterMenu /> */}
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
          <AnimalCard breeds={breeds} />
        </ul>
      
    )}
  </>
  );
};

export default Dogs;
