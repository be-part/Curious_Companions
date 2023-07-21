import "../Styles/main.scss";

const AnimalCard = ({ breeds }) => {
  return (
    <>
      {breeds.map((breed) => (
        <li key={breed.info.id}>
          <div className="animal-card-wrapper">
            <div className="container1">
              <p className="cat-name"> {breed.info.name} </p>
            </div>

            <div className="container2">
              <img className="image" src={breed.image} alt={breed.info.name} />
            </div>

            <div className="container3">
              <p className="facts"> <span style={{fontWeight: 'bold'}}>Origin:</span> {breed.info.origin}</p>
              <p className="facts"> <span style={{fontWeight: 'bold'}}>Temperament:</span> {breed.info.temperament}</p>

              {/* <Link to={`/reviews?category=${slug}`} className="links">
                Click here to view all reviews for the {slug} category
              </Link> */}
            </div>

            <div className="container4">
              <p className="text">{breed.info.description}</p>
            </div>

            <div className="container5">
              <a className="facts" href={breed.info.wikipedia_url}>
                {" "}
                Visit the Wikipedia page.
              </a>
            </div>

          </div>
        </li>
      ))}
    </>
  );
};

export default AnimalCard;
