import "../Styles/main.scss";

const AnimalCard = ({ breeds }) => {
  return (
    <>
      {breeds.map((breed) => (
        <li key={breed.info.id}>
          <div className="animal-card-wrapper">
            <div className="container1">
              <p className="animal-name"> {breed.info.name} </p>
            </div>
            <div className="container2">
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
            </div>

            <div className="container3">
              <p> <span style={{fontWeight: 'bold'}}>Origin:</span> {breed.info.origin}</p>
              <p> <span style={{fontWeight: 'bold'}}>Temperament:</span> {breed.info.temperament}</p>

              {/* <Link to={`/reviews?category=${slug}`} className="links">
                Click here to view all reviews for the {slug} category
              </Link> */}
            </div>

            <div className="container4">
            <p> {breed.info.description} </p>
            </div>

            <div className="container5">
              <a className="facts" target="_blank" rel="noreferrer" href={breed.info.wikipedia_url}>
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
