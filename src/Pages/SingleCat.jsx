import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleCat } from "../API.js/Api";
import Cat from "../Assets/Cat.gif";
import "../Styles/singleanimal.scss";
import Rating from "../Components/Rating";

const SingleCat = () => {
  const { breed_id } = useParams();
  const [singleCat, setSingleCat] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleCat({ breed_id }).then((cat) => {
      setSingleCat(cat);
      setIsLoading(false);
    });
  }, [breed_id]);

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-background">
            <img className="loading-gif" src={Cat} alt="loading" />
            <p className="loading-text">Loading...</p>
          </div>
        </div>
      ) : (
        <>
          <h2>{singleCat.info.name}</h2>

          <div className="single-animal-card-container">
            <div className="single-animal-card-wrapper">
              <div className="single-animal-container1">
                <div>
                  <div className="single-animal-image-container">
                    <img
                      className="image"
                      src={singleCat.image}
                      alt={singleCat.info.name}
                    />
                  </div>
                </div>

                <div className="single-animal-text-container">
                  <p className="single-animal-description-text">
                    <span style={{ fontWeight: "bold" }}>Origin: </span>
                    {singleCat.info.origin}
                  </p>

                  <p className="single-animal-description-text">
                    <span style={{ fontWeight: "bold" }}>Temperament: </span>
                    {singleCat.info.temperament}
                  </p>

                  <p className="single-animal-description-text">
                    <span style={{ fontWeight: "bold" }}>About: </span>
                    {singleCat.info.description}
                  </p>

                  <a
                    className="single-animal-description-text"
                    target="_blank"
                    rel="noreferrer"
                    href={singleCat.info.wikipedia_url}
                  >
                    Visit the Wikipedia page.
                  </a>
                </div>
              </div>
              <div className="single-animal-container2">
                <div className="single-animal-rating-container">
                  <p className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Hypoallergenic: </span>
                    <Rating num={singleCat.info.hypoallergenic} />
                  </p>
                  <p className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Indoor: </span>
                    <Rating num={singleCat.info.indoor} />
                  </p>
                  <p className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Lap: </span>
                    <Rating num={singleCat.info.lap} />
                  </p>
                  <p className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Adaptability: </span>
                    <Rating num={singleCat.info.adaptability} />
                  </p>
                  <p className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Affection: </span>
                    <Rating num={singleCat.info.affection_level} />
                  </p>
                  <p className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Intelligence: </span>
                    <Rating num={singleCat.info.intelligence} />
                  </p>
                  <p className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Child Friendly: </span>
                    <Rating num={singleCat.info.child_friendly} />
                  </p>
                </div>
                <div className="single-animal-rating-container">
                  <p className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Dog Friendly: </span>
                    <Rating num={singleCat.info.dog_friendly} />
                  </p>
                  <p className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Energy Level: </span>
                    <Rating num={singleCat.info.energy_level} />
                  </p>
                  <p className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Grooming: </span>
                    <Rating num={singleCat.info.grooming} />
                  </p>
                  <p className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Health Issues: </span>
                    <Rating num={singleCat.info.health_issues} />
                  </p>
                  <p className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Shedding Level: </span>
                    <Rating num={singleCat.info.shedding_level} />
                  </p>
                  <p className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Vocalisation: </span>
                    <Rating num={singleCat.info.vocalisation} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleCat;
