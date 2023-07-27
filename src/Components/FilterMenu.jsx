import "../Styles/filtermenu.scss";

const FilterMenu = ({catBreeds}) => {
  return (
  <>
    <form className="filter-container">
      <label htmlForfor="breeds">Breed:</label>
      <select name="breeds">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <label htmlForfor="sortBy">Sort By:</label>
      <select name="sortBy">
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>

      <button disabled> Sort! </button>
    </form>
    
  </>);
};

export default FilterMenu;
