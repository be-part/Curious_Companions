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
    <div>
      <h2>Dog Breeds</h2>

      {isLoading ? (
        <div className="Loading">
          <p>Loading...</p>
          <img src={Dog} alt="loading" />
        </div>
      ) : (
        <div className="breeds-list-container">
          <ul className="breeds-list">
            <AnimalCard breeds={breeds} />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dogs;
