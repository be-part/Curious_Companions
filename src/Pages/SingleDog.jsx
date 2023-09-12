import { useParams } from "react-router-dom";
import Dog from "../Assets/Dog.gif";
import "../Styles/singleanimal.scss";
import useFetchAnimal from "../Hooks/useFetchAnimal";

const SingleDog = () => {
  const { breed_id } = useParams();
  const { animal, isLoading } = useFetchAnimal(
    "https://api.thedogapi.com/v1/", 
    breed_id
  );

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-background">
            <img className="loading-gif" src={Dog} alt="loading" />
            <p className="loading-text">Loading...</p>
          </div>
        </div>
      ) : (
        <>
          <h2>{animal.info.name}</h2>

          <div className="single-animal-card-container">
            <div className="single-animal-card-wrapper">
              <div className="single-animal-container1">
                <div>
                <div className="single-animal-image-container">
                  <img
                    className="image"
                    src={animal.image}
                    alt={animal.info.name}
                  />
                  </div>
                </div>

                <div className="single-animal-text-container">
                  <p className="single-animal-description-text">
                    <span style={{ fontWeight: "bold" }}>Origin: </span>
                    {animal.info.origin}
                  </p>

                  <p className="single-animal-description-text">
                    <span style={{ fontWeight: "bold" }}>Temperament: </span>
                    {animal.info.temperament}
                  </p>

                 
                </div>
              </div>
              <div className="single-dog-container2">
                <p className="single-animal-description-text"><span style={{ fontWeight: "bold" }}>Height: </span>{animal.info.height.imperial} inches</p>
                <p className="single-animal-description-text"><span style={{ fontWeight: "bold" }}>Weight: </span>{animal.info.weight.imperial} pounds</p>
                <p className="single-animal-description-text"><span style={{ fontWeight: "bold" }}>Bred For: </span>{animal.info.bred_for}</p>
                <p className="single-animal-description-text"><span style={{ fontWeight: "bold" }}>Breed Group: </span>{animal.info.breed_group}</p>
              </div>

            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleDog;
