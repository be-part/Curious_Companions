import "../Styles/filtermenu.scss";

const FilterMenu = ({ quantity, setQuantity }) => {

  const handleQuantity = (value) => {
    setQuantity(value);
  };


  return (
  <>
    <div className="filter-container">
    
    <label htmlFor="quantity">Quantity (between 1 and 10):</label>
    <input type="number" 
    placeholder="1"  
    htmlFor="quantity" 
    min="1" 
    max="10" 
    value={quantity}
    required 
    onChange={(event) => handleQuantity(event.target.value)}/>


    </div>
    
  </>);
};

export default FilterMenu;
