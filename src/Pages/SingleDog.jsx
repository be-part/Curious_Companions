import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleDog } from "../API.js/Api";
import Dog from "../Assets/Dog.gif";
import "../Styles/singleanimal.scss";

const SingleDog = () => {
  const { breed_id } = useParams();
  const [singleDog, setSingleDog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    getSingleDog({ breed_id }).then((dog) => {
      setSingleDog(dog);
      setIsLoading(false);
    });
  }, [breed_id]);

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
          <h2>{singleDog.info.name}</h2>

          <div className="single-animal-card-container">
            <div className="single-animal-card-wrapper">
              <div className="single-animal-container1">
                <div>
                <div className="single-animal-image-container">
                  <img
                    className="image"
                    src={singleDog.image}
                    alt={singleDog.info.name}
                  />
                  </div>
                </div>

                <div className="single-animal-text-container">
                  <p className="single-animal-description-text">
                    <span style={{ fontWeight: "bold" }}>Origin: </span>
                    {singleDog.info.origin}
                  </p>

                  <p className="single-animal-description-text">
                    <span style={{ fontWeight: "bold" }}>Temperament: </span>
                    {singleDog.info.temperament}
                  </p>

                 
                </div>
              </div>
              <div className="single-dog-container2">
                <p><span style={{ fontWeight: "bold" }}>Height: </span>{singleDog.info.height.imperial} inches</p>
                <p><span style={{ fontWeight: "bold" }}>Weight: </span>{singleDog.info.weight.imperial} pounds</p>
                <p><span style={{ fontWeight: "bold" }}>Bred For: </span>{singleDog.info.bred_for}</p>
                <p><span style={{ fontWeight: "bold" }}>Breed Group: </span>{singleDog.info.breed_group}</p>
              </div>

            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleDog;
