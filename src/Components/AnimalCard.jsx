import "../Styles/main.scss";
import { Link } from "react-router-dom";

const AnimalCard = ({ breeds, animal }) => {


  return (
    <>
      {breeds.map((breed) => (
        <li key={breed.info.id}>
          <div className="animal-card-wrapper">
            <div className="container1">
            <p className={breed.info.name.length > 20 ? 'animal-name-small' : 'animal-name'}> {breed.info.name} </p>

            </div>
            <div className="container2">
              
            <Link to={(animal === "cat" ? `view-cat/${breed.info.id}` : `view-dog/${breed.info.id}`)}>
              <img
            className={
              breed.imageHeight > 1000 && breed.imageWidth > 1000 ? 'image-tallHeight-longWidth' 
            : breed.imageHeight > 1000 && breed.imageWidth <= 1000 ? 'image-tallHeight-shortWidth' 
            : breed.imageHeight <= 1000 && breed.imageWidth > 1000 ? 'image-shortHeight-longWidth'
            : 'image-shortHeight-shortWidth'
            }
              id="image"
              src={breed.image}
              alt={breed.info.name}
              
            />
            </Link>
            </div>

            <div className="container3">
              <p> <span className="descriptors">Origin:</span> {breed.info.origin}</p>
              <p> <span className="descriptors">Temperament:</span> {breed.info.temperament}</p>

            </div>

            <div className="container4">
            <p> <span className="descriptors">About: </span>{(animal === "cat" ? breed.info.description : `There is currently no description available for this breed. Check back at a later time.`)} </p>
            </div>

          </div>
        </li>
      ))}
    </>
  );
};

export default AnimalCard;
