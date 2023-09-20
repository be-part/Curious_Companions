import { useParams } from "react-router-dom";
import Cat from "../Assets/Cat.gif";
import "../Styles/singleanimal.scss";
import Rating from "../Components/Rating";
import useFetchAnimal from "../Hooks/useFetchAnimal";

const SingleCat = () => {
  const { breed_id } = useParams();
  const { animal, isLoading } = useFetchAnimal(
    "https://api.thecatapi.com/v1/",
    breed_id
  );
  
  return (
    <>
      {isLoading ? (
        <div className="loading-container2">
          <div className="loading-background">
            <img className="loading-gif" src={Cat} alt="loading" />
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
                  <div className="single-animal-description-text">
                    <span style={{ fontWeight: "bold" }}>Origin: </span>
                    {animal.info.origin}
                  </div>

                  <div className="single-animal-description-text">
                    <span style={{ fontWeight: "bold" }}>Temperament: </span>
                    {animal.info.temperament}
                  </div>

                  <div className="single-animal-description-text">
                    <span style={{ fontWeight: "bold" }}>About: </span>
                    {animal.info.description}
                  </div>

                  <a
                    className="single-animal-description-text"
                    target="_blank"
                    rel="noreferrer"
                    href={animal.info.wikipedia_url}
                  >
                    Visit the Wikipedia page.
                  </a>
                </div>
              </div>
              <div className="single-animal-container2">
                <div className="single-animal-rating-container">
                  <div className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Hypoallergenic: </span>
                    <Rating num={animal.info.hypoallergenic} />
                  </div>
                  <div className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Indoor: </span>
                    <Rating num={animal.info.indoor} />
                  </div>
                  <div className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Lap: </span>
                    <Rating num={animal.info.lap} />
                  </div>
                  <div className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Adaptability: </span>
                    <Rating num={animal.info.adaptability} />
                  </div>
                  <div className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Affection: </span>
                    <Rating num={animal.info.affection_level} />
                  </div>
                  <div className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Intelligence: </span>
                    <Rating num={animal.info.intelligence} />
                  </div>
                  <div className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Child Friendly: </span>
                    <Rating num={animal.info.child_friendly} />
                  </div>
                </div>
                <div className="single-animal-rating-container">
                  <div className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Dog Friendly: </span>
                    <Rating num={animal.info.dog_friendly} />
                  </div>
                  <div className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Energy Level: </span>
                    <Rating num={animal.info.energy_level} />
                  </div>
                  <div className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Grooming: </span>
                    <Rating num={animal.info.grooming} />
                  </div>
                  <div className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Health Issues: </span>
                    <Rating num={animal.info.health_issues} />
                  </div>
                  <div className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Shedding Level: </span>
                    <Rating num={animal.info.shedding_level} />
                  </div>
                  <div className="star-ratings">
                    <span style={{ fontWeight: "bold" }}>Vocalisation: </span>
                    <Rating num={animal.info.vocalisation} />
                  </div>
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
