import { getBreeds } from "../API.js/Api";
import AnimalCard from "../Components/AnimalCard";
import "../Styles/main.scss";
import { useEffect, useState } from "react";


const Cats = () => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBreeds().then((breeds) => {
      const breedInfos = breeds.map((breed) => breed);
      setBreeds(breedInfos);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p className="Loading"> Loading... </p>;

  return (
    <div>
      <h2>Cat Breeds</h2>

      <div className="breeds-list-container">
        <ul className="breeds-list">
          <AnimalCard breeds={breeds} />
        </ul>
      </div>
    </div>
  );
};

export default Cats;
